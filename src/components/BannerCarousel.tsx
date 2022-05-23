import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useRef, useState } from "react";
import {View,Text, StyleSheet,ListRenderItem, ImageBackground, Dimensions, Platform} from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import Animated,{ Extrapolate, interpolateNode, useValue } from "react-native-reanimated";
import PlayIcon from "../assets/Icons/Play";
import {BoldText} from "../utility/Text";

const {width:wWidth} = Dimensions.get('screen');
const ITEM_HEIGHT = 174;
const ITEM_WIDTH = wWidth * 0.9;
const SPACER_ITEM_SIZE = (wWidth - ITEM_WIDTH) / 2;

interface DataProps {
    id:Number | String,
    title:String,
    release:String,
    bg:any,

}

interface ItemProps {
    item:DataProps,
    index:number
}

const Data : DataProps[] = [
    {
        id:1,
        title:'Black Panther: Wakanda Forever',
        release:'On March 2, 2022',
        bg:require('../assets/Banner/Aquaman.png')
    },
    {
        id:2,
        title:'Black Panther: Wakanda Forever',
        release:'On March 2, 2022',
        bg:require('../assets/Banner/Lootcase.png')
    },
    {
        id:3,
        title:'Black Panther: Wakanda Forever',
        release:'On March 2, 2022',
        bg:require('../assets/Banner/Aquaman.png')
    }
]

const Banner = () => {

    const navigation = useNavigation();
    // const ScrollX = useRef(new Animated.Value(0)).current;
    // const ScrollX = useSharedValue(0);
    const ScrollX = useValue(0);
    const [BannerData,setBannerData] = useState<any>([]);
    useEffect(() => {
        setBannerData([{ id:'Spacer-left' }, ...Data, { id:'Spacer-right' }])
    },[])

    // const onScroll = useAnimatedScrollHandler({
    //     onScroll:({ contentOffset : { y } }) => {
    //         ScrollX = y;
    //     }
    // })


    return(
        <View style={styles.container}>
            <Animated.FlatList 
                data={BannerData}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={ITEM_WIDTH}
                onScroll={Animated.event(
                    [{nativeEvent: { contentOffset: { x:ScrollX } }}],
                    {useNativeDriver:false}
                )}
                // onScroll={onScroll}
                scrollEventThrottle={16}
                // snapToAlignment="end"
                overScrollMode={"never"}
                decelerationRate={Platform.OS === "android" ? 0.75 : 0}
                keyExtractor={(item,index) => index.toString()}
                renderItem={({item,index}:ItemProps) => {

                    if(!item.title) {
                        return <View style={{width:SPACER_ITEM_SIZE}} />
                    }
  
                    return (
                        <TouchableWithoutFeedback>
                            <Animated.View style={[styles.itemContainer]}>
                                <ImageBackground source={item.bg} style={styles.imageContainer}>
                                    <View style={styles.textContainer}>
                                        <View style={styles.innerText}>
                                            <BoldText numberOfLines={2} style={styles.title}>{item.title}</BoldText>
                                            <Text style={styles.releaseDate}>{item.release}</Text>
                                        </View>
                                        <View style={styles.playBtn}>
                                            <TouchableOpacity>
                                                <PlayIcon fill="white" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </Animated.View>
                        </TouchableWithoutFeedback>
                    )
                }}
            />
            <View style={styles.dotsContainer}>
                {Data.map((item,index) => {

                        const width = interpolateNode(ScrollX,{
                            inputRange:[(index - 1) * ITEM_WIDTH,index * ITEM_WIDTH, (index + 1) * ITEM_WIDTH],
                            outputRange:[8,24,8],
                            extrapolate:Extrapolate.CLAMP
                        })

                        const opacity = interpolateNode(ScrollX,{
                            inputRange:[(index - 1) * ITEM_WIDTH,index * ITEM_WIDTH, (index + 1) * ITEM_WIDTH],
                            outputRange:[.5,1,.5],
                            extrapolate:Extrapolate.CLAMP
                        })

                    return(
                        <Animated.View key={index} style={[styles.dots,{width,opacity}]} />
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        alignItems:"center",
    },
    itemContainer:{
        width:ITEM_WIDTH,
        padding:10
    },
    imageContainer:{
        height:ITEM_HEIGHT,
        resizeMode:'contain',
        flexDirection:'row',
        padding:16,
        borderRadius:20,
        overflow:'hidden'
    },
    title:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    },
    textContainer:{
        alignSelf:'flex-end',
        flexDirection:"row",
        justifyContent:"space-between"
    },
    releaseDate:{
        color:'white',
        fontSize:16
    },
    dotsContainer:{
        flexDirection:'row',
        // backgroundColor:'red',
    },
    dots:{
        // backgroundColor:"#12CDD9",
        // backgroundColor:"#6596EF",
        backgroundColor:"#4A97C5",
        // width:8,
        height:8,
        borderRadius:10,
        justifyContent:"center",
        marginHorizontal:5
    },
    playBtn:{
        width:50,
        height:50,
        borderRadius:25,
        backgroundColor:"#4A97C5",
        alignSelf:"center",
        alignItems:"center",
        justifyContent:'center'
    },
    innerText:{
        flexDirection:"column",
        width:"80%"
    }
})

export default Banner;