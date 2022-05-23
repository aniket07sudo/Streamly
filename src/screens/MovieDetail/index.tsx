import React, { useEffect, useRef, useState } from "react";
import { View, Image, Text, StyleSheet, Dimensions, StatusBar, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {SharedElement} from "react-navigation-shared-element";
import { Colors } from "../../utility/Defaults";
import {SemiBoldText,MediumText, RegularText} from "../../utility/Text";
import StarIcon from "../../assets/Icons/Star";
import BackIcon from "../../assets/Icons/Back";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HeartIcon from "../../assets/Icons/Heart"
import { RouteProp,NavigationProp } from "@react-navigation/native";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withDelay, withTiming , SlideInUp, useAnimatedScrollHandler, Extrapolate, interpolateNode, interpolateColors, interpolateColor, Extrapolation } from "react-native-reanimated";
import PlayIcon from "../../assets/Icons/Play";
import { useValue,onScrollEvent} from "react-native-redash";

const { height,width} = Dimensions.get("window");
const BannerHeight = height * 0.60;
const PlayBtnHeight = 55;
const SimilarCardWidth = (width / 3) - 17;
const MIN_HEADER_HEIGHT = 80;


 interface Story {
    id: string;
}
  
 type SnapchatRoutes = {
    Story: { item: Story };
  };

const AnimateLinearGradient = Animated.createAnimatedComponent(LinearGradient);

interface MovieDetailsProps {
    route:RouteProp<SnapchatRoutes>,
    navigation:NavigationProp<SnapchatRoutes>
    showing:boolean
}   

const Search = ({route,navigation,showing}:MovieDetailsProps) => {
    const {item} = route.params;
    const Padding = useSafeAreaInsets();
    const ButtonRef = useRef<any>(null);
    const Animation = useSharedValue(0);
    const [titleCenter,setTitleCenter] = useState(0);

    const animatedStyle = useAnimatedStyle(() => {
        const Opacity = interpolate(Animation.value,[0,1],[0,1]);
        return{
            opacity:Opacity
        }
    })


    useEffect(() => {
        Animation.value = withDelay(100,withTiming(1,{duration:1000}));
    },[])

    const onLayout=(event:any)=> {
        const {x, y, height, width} = event.nativeEvent.layout;
        setTitleCenter(width);
        
      }
    

    const onGoBack = () => {
        Animation.value = withTiming(0,{duration:100});
        navigation.goBack()
    }

    // const ScrollY = useValue(0);

    // const TranslateY = interpolateNode(ScrollY,{
    //     inputRange:[0,BannerHeight * 0.6],
    //     outputRange:[BannerHeight * 0.63,0],
    //     extrapolateRight:Extrapolate.CLAMP
    // })
    // const TranslateX = interpolateNode(ScrollY,{
    //     inputRange:[0,BannerHeight * 0.72],
    //     outputRange:[width / 2 - titleCenter,0],
    //     extrapolate:Extrapolate.CLAMP
    // })

    // const FontSize = interpolateNode(ScrollY,{
    //     inputRange:[0,BannerHeight * 0.72],
    //     outputRange:[22,18],
    //     extrapolateRight:Extrapolate.CLAMP
    // })
    const ScrollY = useSharedValue(0);


    const onScroll = useAnimatedScrollHandler({
        onScroll:({ contentOffset : { y:value } }) => {
            ScrollY.value = value;
        }
    })

    const AnimatedTransform = useAnimatedStyle(() => {
        const TranslateY = interpolate(ScrollY.value,
            [0,BannerHeight * 0.6],
            [BannerHeight * 0.63,0],
            {extrapolateRight:Extrapolate.CLAMP}
        )
        const TranslateX = interpolate(ScrollY.value,
            [0,BannerHeight * 0.72],
            [width / 2 - titleCenter,0],
            Extrapolate.CLAMP
        )

        return {
            transform:[{translateX:TranslateX},{translateY:TranslateY}]
        }
    
    })

    // const TranslateY = interpolate(ScrollY.value,
    //     [0,BannerHeight * 0.6],
    //     [BannerHeight * 0.63,0],
    //     Extrapolate.CLAMP
    // )
    // const TranslateX = interpolate(ScrollY.value,
    //     [0,BannerHeight * 0.72],
    //     [width / 2 - titleCenter,0],
    //     Extrapolate.CLAMP
    // )

  

    const FontSize = useAnimatedStyle(() => {
        const fontSize = interpolate(ScrollY.value,
            [0,BannerHeight * 0.72],
            [22,18],
            Extrapolate.CLAMP
        )

        return {
            fontSize
        }
    
    })

    const ImageHeight = useAnimatedStyle(() => {
        const Image = interpolate(ScrollY.value,
            [-100,0],
            [BannerHeight + 100,BannerHeight],
        )

        return {
            height:Image
        }
    
    })

    const BackgroundHead = interpolateColors(ScrollY.value,{
        inputRange:[0,BannerHeight],
        outputColorRange:["transparent","rgba(0,0,0,0.5)"],
        
    })


    return(
        <View style={{flex:1,position:"relative"}}>
            {/* <View style={[styles.imageWrapper]}>
            <SharedElement id={`image.${item.id}`} style={{...StyleSheet.absoluteFillObject}}>
                <Animated.Image style={[styles.imageContainer,ImageHeight]} source={require("../../assets/Banner/Aladdin.jpg")}  />
            </SharedElement>
            <AnimateLinearGradient  colors={['transparent', Colors.background]} style={[styles.linearGradient,animatedStyle]} />
        </View> */}
        <Animated.View exiting={SlideInUp} style={[styles.Head,{paddingTop:Padding.top},animatedStyle,{backgroundColor:BackgroundHead}]}>
            <View style={styles.Back} ref={ButtonRef}>
                <TouchableOpacity onPress={onGoBack}>
                    <BackIcon fill="white"  />
                </TouchableOpacity>
                <Animated.View style={AnimatedTransform}>
                    <Animated.Text onLayout={onLayout} style={[styles.headTitleLabel,FontSize]}>Aladdin</Animated.Text>
                </Animated.View>
            </View>
            <View style={styles.Heart}>
                <HeartIcon />
                
            </View>
        </Animated.View>
        
        <Animated.ScrollView scrollEventThrottle={16} 
            onScroll={onScroll}
            style={[styles.container,StyleSheet.absoluteFillObject]}>
                {/* <View style={{height:BannerHeight}} /> */}
            <View style={styles.imageOuter}>
                
                <View style={[styles.imageWrapper]}>
                    <SharedElement id={`image.${item.id}`} style={{...StyleSheet.absoluteFillObject}}>
                        <Animated.Image style={[styles.imageContainer,ImageHeight]} source={require("../../assets/Banner/Aladdin.jpg")}  />
                    </SharedElement>
                    <AnimateLinearGradient  colors={['transparent', Colors.background]} style={[styles.linearGradient,animatedStyle]} />
                </View>
                <Animated.View style={[styles.playBtn,animatedStyle]}>
                        <PlayIcon fill="white" />
                    </Animated.View>
                <Animated.View style={[styles.imageTextContainer,animatedStyle]}>
                    <View  style={[styles.movieDetails]}>
                        <View style={styles.tag}>
                            <Image style={styles.tagIcon} source={require("../../assets/Icons/calendar.png")} />
                            <MediumText style={styles.tagText}>2021</MediumText>
                        </View>
                        <View style={{width:1,height:"100%",backgroundColor:Colors.greyText}} />
                        <View style={styles.tag}>
                            <Image style={styles.tagIcon} source={require("../../assets/Icons/calendar.png")} />
                            <MediumText style={styles.tagText}>Action, Fantasy</MediumText>
                        </View>
                        <View style={{width:1,height:"100%",backgroundColor:Colors.greyText}} />
                        <View style={styles.tag}>
                            <Image style={styles.tagIcon} source={require("../../assets/Icons/clock.png")} />
                            <MediumText style={styles.tagText}>148 mins</MediumText>
                        </View>
                    </View>
                    <SharedElement style={styles.starRatingContainer} id={`rating.${item.id}`} >
                        <StarIcon fill={Colors.secondary} width="20" height="20" />
                        <MediumText style={styles.rating}>4.2 </MediumText><MediumText style={styles.tagText}>(128 Reviews)</MediumText>
                    </SharedElement>
                </Animated.View>
            </View>
            <View style={styles.TextContent}>
                <View style={styles.sectionContainer}>
                    <MediumText style={styles.heading}>The Plot</MediumText>
                    <RegularText numberOfLines={4} style={styles.content}>Originally a story from Archie Comics which started in 1941, </RegularText>
                    <View style={styles.directors}>
                        <MediumText style={styles.Label}>Directors: <RegularText style={styles.labelTxt}>Aniket Kumar</RegularText></MediumText>
                        <MediumText style={styles.Label}>Writers: <RegularText style={styles.labelTxt}>Aniket Kumar</RegularText></MediumText>
                    </View>
                </View>
                <View style={styles.sectionContainer}>
                    <MediumText style={styles.heading}>The Cast</MediumText>
                    <ScrollView style={styles.castContainer} showsHorizontalScrollIndicator={false} horizontal>
                        <View style={styles.cast}>
                            <Image style={styles.castImg} source={require("../../assets/Images/cast.jpg")} />
                            <MediumText numberOfLines={2} style={styles.castName}>Aniket</MediumText>
                            <RegularText numberOfLines={2} style={styles.castRole}>as Hero </RegularText>
                        </View>
                        <View style={styles.cast}>
                            <Image style={styles.castImg} source={require("../../assets/Images/cast2.jpg")} />
                            <MediumText numberOfLines={2} style={styles.castName}>Triyam </MediumText>
                            <RegularText numberOfLines={2} style={styles.castRole}>as Villian </RegularText>
                        </View>
                        <View style={styles.cast}>
                            <Image style={styles.castImg} source={require("../../assets/Images/cast3.jpg")} />
                            <MediumText numberOfLines={2} style={styles.castName}>Aditya Adi</MediumText>
                            <RegularText numberOfLines={2} style={styles.castRole}>as Hero </RegularText>
                        </View>
                        <View style={styles.cast}>
                            <Image style={styles.castImg} source={require("../../assets/Images/cast3.jpg")} />
                            <MediumText numberOfLines={2} style={styles.castName}>Aditya Adi</MediumText>
                            <RegularText numberOfLines={2} style={styles.castRole}>as Hero </RegularText>
                        </View>
                        <View style={styles.cast}>
                            <Image style={styles.castImg} source={require("../../assets/Images/cast3.jpg")} />
                            <MediumText numberOfLines={2} style={styles.castName}>Aditya Adi</MediumText>
                            <RegularText numberOfLines={2} style={styles.castRole}>as Hero </RegularText>
                        </View>
                       
                    </ScrollView>
                </View>
                <View style={styles.similarSection}>
                <MediumText style={styles.similarheading}>More like this</MediumText>
                <View style={styles.similarContainer}>
                    <View style={styles.similar}>
                        <Image style={{width:SimilarCardWidth,height:200}} source={require("../../assets/Images/cast.jpg")} />
                    </View>
                    <View style={styles.similar}>
                        <Image style={{width:SimilarCardWidth,height:200}} source={require("../../assets/Images/cast2.jpg")} />
                    </View>
                    <View style={styles.similar}>
                        <Image style={{width:SimilarCardWidth,height:200}} source={require("../../assets/Images/cast3.jpg")} />
                    </View>
                    <View style={styles.similar}>
                        <Image style={{width:SimilarCardWidth,height:200}} source={require("../../assets/Images/cast2.jpg")} />
                    </View>
                    <View style={styles.similar}>
                        <Image style={{width:SimilarCardWidth,height:200}} source={require("../../assets/Images/cast3.jpg")} />
                    </View>
                    <View style={styles.similar}>
                        <Image style={{width:SimilarCardWidth,height:200}} source={require("../../assets/Images/cast.jpg")} />
                    </View>
                    <View style={styles.similar}>
                        <Image style={{width:SimilarCardWidth,height:200}} source={require("../../assets/Images/cast3.jpg")} />
                    </View>
                    <View style={styles.similar}>
                        <Image style={{width:SimilarCardWidth,height:200}} source={require("../../assets/Images/cast2.jpg")} />
                    </View>
                </View>
                </View>
            </View>
        </Animated.ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // flex:1,
        backgroundColor:Colors.background,
        // zIndex:1
    },
    Back:{
        flexDirection:"row",
        alignItems:"center",
    },  
    backtitle:{
        color:"white",
        fontSize:20,
    },
    Heart:{
        marginHorizontal:10
    },
    TextContent:{
        marginTop:-PlayBtnHeight
    },
    Head:{
        position:"absolute",
        top:0,
        zIndex:10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        height:MIN_HEADER_HEIGHT,
        width:"100%",
        // backgroundColor:"red"
    },
    linearGradient:{
        height:BannerHeight,
        width,
        position:"absolute",
    },
    imageWrapper:{
        flexDirection:"row",
        height:BannerHeight,
        // position:"absolute",
        zIndex:2,
        top:0,
        left:0,
    },
    imageContainer:{
        resizeMode:"cover",
        width,
        flex:1,
        height:200,
        backgroundColor:"green"
    },
    imageOuter:{
        position:"relative",
        // top:BannerHeight,
        // left:200,
        width:"100%",
        // zIndex:1000
        // backgroundColor:"red",
        // ...StyleSheet.absoluteFillObject
    },
    imageTextContainer:{
        // position:"absolute",
        top:-BannerHeight * 0.21,
        textAlign:"center",
        width:"100%",
        zIndex:20,
        // backgroundColor:"red"

    },
    movieName:{
        color:"white",
        fontSize:22,
        textAlign:"center",
        backfaceVisibility:"hidden"
    },
    movieDetails:{
        flexDirection:"row",
        textAlign:"center",
        justifyContent:"center",
    },
    tag:{
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal:6,
        marginVertical:4
    },
    tagText:{
        color:Colors.greyText,
        lineHeight:20,
        fontSize:16
    },
    tagIcon:{
        marginHorizontal:4
    },
    starRatingContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    rating:{
        color:Colors.secondary,
        marginHorizontal:4,
        fontSize:16
    },
    sectionContainer:{
        paddingHorizontal:12
    },
    heading:{
        fontSize:18,
        color:'white',
        marginTop:20,
        marginBottom:10
    },
    similarheading:{
        fontSize:18,
        color:'white',
        marginTop:20,
        marginBottom:10,
        paddingHorizontal:12
    },
    content:{
        fontSize:16,
        color:Colors.greyText,
        lineHeight:22
    },
    directors:{
    },
    Label:{
        color:Colors.primary,
        fontSize:16,
        marginTop:8
    },
    labelTxt:{
        color:Colors.greyText
    },
    playBtn:{
        width:PlayBtnHeight,
        height:PlayBtnHeight,
        backgroundColor:Colors.primary,
        borderRadius:35,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        right:20,
        zIndex:10,
        // top:0,
        bottom:PlayBtnHeight,
        
    },
    castContainer:{
        flexDirection:"row"
    },
    cast:{
        marginHorizontal:4
    },
    castImg:{
        width:90,
        height:90,
        borderRadius:8
    },
    castName:{
        color:"white",
        fontSize:14,
        textAlign:"center",
        width:90
    },
    castRole:{
        color:Colors.greyText,
        fontSize:12,
        textAlign:"center"
    },
    similarSection:{
        // paddingHorizontal:10
        marginBottom:20
    },
    similarContainer:{
        flexDirection:"row",
        flexWrap:"wrap",
        paddingHorizontal:10
    },
    similar:{
        marginHorizontal:5,
        borderRadius:8,
        overflow:"hidden",
        marginVertical:4
    },
    headTitleLabel:{
        fontFamily:"Poppins-SemiBold",
        color:"white",
    }
})

export default Search;