import React , {useState,useRef, useEffect} from "react";
import {View,Text, StyleSheet,Dimensions,TouchableOpacity} from "react-native";
import BackIcon from "../../assets/Icons/Back";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withDelay, withTiming , SlideInUp, useAnimatedScrollHandler, Extrapolate, interpolateNode, interpolateColors, interpolateColor, Extrapolation } from "react-native-reanimated";
import LottieView from "lottie-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { height,width} = Dimensions.get("window");
const MIN_HEADER_HEIGHT = 80;
const BannerHeight = height * 0.60;

interface HeaderImageProps {
    navigation:any,
    ScrollY:Animated.SharedValue<number>,
    Animation:Animated.SharedValue<number>
}

const Header = ({navigation,ScrollY,Animation}:HeaderImageProps) => {

    const ButtonRef = useRef<any>(null);
    const LikeRef = useRef<any>(null);
    const [titleCenter,setTitleCenter] = useState(0);
    const [liked,setLiked] = useState(false);
    const Padding = useSafeAreaInsets();
    // let isFirstRun = useRef(false).current;

    // useEffect(() => {
    //     if(isFirstRun) {
    //         if(liked) {
    //             LikeRef.current.play(111,111)
    //         } else {
    //             LikeRef.current.play(0,0)
    //         }
    //         isFirstRun = false;

    //     } else {
    //         if(liked) {
    //             LikeRef.current.play(20,76)
    //         } else {
    //             LikeRef.current.play(106,171)
    //         }
    //     }
    // },[liked])


    const onGoBack = () => {
        Animation.value = withTiming(0,{duration:100});
        navigation.goBack()
    }

    const animatedStyle = useAnimatedStyle(() => {
        const Opacity = interpolate(Animation.value,[0,1],[0,1]);
        return{
            opacity:Opacity
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


    const onLayout=(event:any)=> {
        const {width} = event.nativeEvent.layout;
        setTitleCenter(width);
      }

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

    const BackgroundHead = interpolateColors(ScrollY.value,{
        inputRange:[0,BannerHeight],
        outputColorRange:["transparent","rgba(0,0,0,0.5)"],
        
    })

    return(
        <Animated.View style={[styles.Head,{paddingTop:Padding.top},animatedStyle,{backgroundColor:BackgroundHead}]}>
            <View style={styles.Back}>
                <TouchableOpacity onPress={onGoBack}>
                    <BackIcon fill="white"  />
                </TouchableOpacity>
                <Animated.View style={AnimatedTransform}>
                    <Animated.Text onLayout={onLayout} style={[styles.headTitleLabel,FontSize]}>Aladdin</Animated.Text>
                </Animated.View>
            </View>
            <TouchableOpacity onPress={() => setLiked(!liked)} style={styles.Heart}>
                <LottieView ref={LikeRef} style={{width:64,height:64}} source={require("../../assets/Lottie/like.json")} autoPlay={false} loop={false} />
            </TouchableOpacity>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    Head:{
        flex:1,
        position:"absolute",
        top:0,
        zIndex:10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        height:MIN_HEADER_HEIGHT,
        width:"100%",
    },
    Back:{
        flexDirection:"row",
        alignItems:"center",
    },
    Heart:{
        marginHorizontal:10
    },
    headTitleLabel:{
        fontFamily:"Poppins-SemiBold",
        color:"white",
    }
})

export default Header;