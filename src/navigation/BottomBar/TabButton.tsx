import React from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity} from "react-native";
import Animated from "react-native-reanimated";
import HomeIcon from "../../assets/Icons/Home";
import {MediumText} from "../../utility/Text";


const TabButton = ({navigation,label,animatedStyle,route,setFocus,focussed,Icon}) => {

    const Navigate = () => {
        setFocus(route);
        navigation.navigate(route);
    }

    // const opacity = interpolateNode(focussed,{
    //     inputRange:[0,1],
    //     outputRange:[1,0],
    //     extrapolate:Extrapolate.CLAMP
    // })

    return(
    <Animated.View style={[styles.container,animatedStyle]}>
        <TouchableOpacity onPress={Navigate}>
            <View style={[styles.contentContainer,{backgroundColor:focussed ? "#252836" : "transparent"}]}>
                {/* <HomeIcon fill={focussed ? "#12CDD9" : "#92929D"} /> */}
                {/* <Image source={icon} /> */}
                {/* <Icon fill={focussed ? "#12CDD9" : "#92929D"} /> */}
                <Icon fill={focussed ? "#4A97C5" : "#92929D"} />
                {/* <Icon fill={focussed ? "#6596EF" : "#92929D"} /> */}
                {focussed && 
                <Animated.View style={[styles.labelView,{opacity:1}]}>
                    <MediumText style={styles.labelText} numberOfLines={1}>{label}</MediumText>
                </Animated.View>
                }
            </View>
        </TouchableOpacity>
    </Animated.View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
    },
    contentContainer:{
        paddingVertical:10,
        borderRadius:20,
        paddingHorizontal:20,
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"green"
    },
    labelView:{
        marginHorizontal:10,
        position:"relative"
    },
    labelText:{
        // color:"#12CDD9",
        color:"#4A97C5",
        lineHeight:20,
        // width:"100%"
        // color:"#6596EF"
    }
})

export default TabButton;