import React , {useState,useRef,useEffect} from "react";
import {View,Text, StyleSheet,Dimensions,TouchableOpacity, Image} from "react-native";
import BackIcon from "../../assets/Icons/Back";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withDelay, withTiming , SlideInUp, useAnimatedScrollHandler, Extrapolate, interpolateNode, interpolateColors, interpolateColor, Extrapolation } from "react-native-reanimated";
import LottieView from "lottie-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {SharedElement} from "react-navigation-shared-element";
import { Colors } from "../../utility/Defaults";
import LinearGradient from "react-native-linear-gradient";
import ShareIcon from "../../assets/Icons/Share"
import PlayIcon from "../../assets/Icons/Play";
import { MediumText } from "../../utility/Text";
import StarIcon from "../../assets/Icons/Star";


const { height,width} = Dimensions.get("window");
const MIN_HEADER_HEIGHT = 80;
const BannerHeight = height * 0.60;
const PlayBtnHeight = 50;

const AnimateLinearGradient = Animated.createAnimatedComponent(LinearGradient);

  
type Item = {
    id:String
};

interface HeaderImageProps {
    navigation:any,
    ScrollY:Animated.SharedValue<number>,
    item:Item,
    Animation:Animated.SharedValue<number>
}


const HeaderImage = ({navigation,ScrollY,item,Animation}:HeaderImageProps) => {



    const ThumbsRef = useRef<any>(null);
    const [liked,setLiked] = useState(false);
    let isFirstRun = useRef(true);

    // useEffect(() => {
    //     if(isFirstRun) {
    //         if(liked) {
    //             ThumbsRef.current.play(73,73);
    //         } else {
    //             ThumbsRef.current.play(0,0);
    //         }
    //         isFirstRun.current = false;
    //     } else {
    //         if(liked) {
    //             ThumbsRef.current.play(20,69);
    //         } else {
    //             ThumbsRef.current.play(71,20);
    //         }
    //     }
    // },[liked])

    const animatedStyle = useAnimatedStyle(() => {
        const Opacity = interpolate(Animation.value,[0,1],[0,1]);
        return{
            opacity:Opacity
        }
    })

    const Top = useAnimatedStyle(() => {
        
        const Top = interpolate(ScrollY.value,
            [0,BannerHeight],
            [0,-BannerHeight],
            {extrapolateRight:Extrapolate.CLAMP}
        )
        return {
            top:Top
        }
    })

    

    const ImageHeight = useAnimatedStyle(() => {
        const Image = interpolate(ScrollY.value,
            [-10,0,100],
            [BannerHeight + 4,BannerHeight,BannerHeight - 100],
        )
        return {
            height:Image,
        }
    
    })

    const OnPlay = () => {
        console.log("Play Video");
    }

    

    return(
        <>
        <Animated.View pointerEvents="box-none" style={[styles.imageOuter,Top]}>
            <Animated.View  pointerEvents="none" style={[styles.imageWrapper]}>
                <SharedElement id={`image.${item.id}`} pointerEvents="box-only" style={{...StyleSheet.absoluteFillObject}}>
                    <View>
                        <Animated.Image style={[styles.imageContainer,ImageHeight]} source={require("../../assets/Banner/Aladdin.jpg")}  />
                    </View>
                </SharedElement>
                <AnimateLinearGradient colors={['transparent', Colors.background]} style={[styles.linearGradient,animatedStyle,Top]} />
            </Animated.View>
            <View style={styles.optionsWrapper}>
                <View style={styles.optionsContainer}>
                    <TouchableOpacity onPress={() => setLiked(!liked)} style={styles.btn}>
                        <LottieView ref={ThumbsRef} style={{width:50,height:50}} source={require("../../assets/Lottie/thumbs.json")} autoPlay={false} loop={false} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log("Hello")} style={styles.btn}>
                        <ShareIcon fill="#FF8700" height={24} width={24} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={OnPlay} >
                    <Animated.View style={[styles.playBtn,animatedStyle]}>
                        <PlayIcon  fill="white" />
                    </Animated.View>
                </TouchableOpacity>
            </View>
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
                    <>
                        <StarIcon fill={Colors.secondary} width="20" height="20" />
                        <MediumText style={styles.rating}>4.2 </MediumText>
                        <MediumText style={styles.tagText}>(128 Votes)</MediumText>
                    </>
                </SharedElement>
            </Animated.View>
    </Animated.View>
    </>
    )
}

const styles = StyleSheet.create({
    imageWrapper:{
        flexDirection:"row",
        height:BannerHeight,
    },
    imageOuter:{
        position:"relative",
        top:0,
        left:0,
        zIndex:2,
        width:"100%",
        overflow:"hidden"
    },
    imageContainer:{
        resizeMode:"cover",
        width,
        flex:1,
        position:"absolute",
        top:0,
        left:0,
    },
    optionsWrapper:{
        position:"relative",
        width,
        top:-PlayBtnHeight,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingRight:16,
        height:PlayBtnHeight,
    },
    optionsContainer:{
        flexDirection:"row",
        alignItems:"center",
    },
    btn:{
        marginRight:4
    },
    movieDetails:{
        flexDirection:"row",
        textAlign:"center",
        justifyContent:"center",
    },
    imageTextContainer:{
        top:-BannerHeight * 0.31,
        textAlign:"center",
        width:"100%",
        zIndex:20,
    },
    playBtn:{
        width:PlayBtnHeight,
        height:PlayBtnHeight,
        backgroundColor:Colors.primary,
        borderRadius:35,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        top:0,
        right:0,
        bottom:PlayBtnHeight,
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
    linearGradient:{
        height:BannerHeight + 5,
        width,
        position:"absolute",
        zIndex:1
    },
})

export default HeaderImage;