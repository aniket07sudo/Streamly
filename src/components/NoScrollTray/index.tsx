import React, { useEffect, useState } from "react";
import {View,Text,StyleSheet, ImageProps,Image,FlatList,Dimensions, TouchableNativeFeedback,TouchableOpacity} from "react-native";
import {SemiBoldText} from "../../utility/Text";
import SearchIcon from "../../assets/Icons/Star";
import {Colors} from "../../utility/Defaults";
import {MediumText,RegularText} from "../../utility/Text";
// import {BlurView,VibrancyView} from "@react-native-community/blur";
import {SharedElement} from "react-navigation-shared-element";
import { useNavigation } from "@react-navigation/core";

interface DataProps {
    image:ImageProps
    id:number
}

interface TrayProps {
    label:String,
    data:DataProps[]
}

const Tray = ({label,data}:TrayProps) => {

    const [TrayData,setData] = useState<any>(data);
    const navigation = useNavigation();

    useEffect(() => {
        setData([{ id:"Spacer"},...data,{ id:"Spacer" }]);
    },[])

    return(
        <View style={styles.container}>  
            <View style={styles.trayHead}>
                <SemiBoldText style={styles.headText}>{label}</SemiBoldText>
                <TouchableOpacity>
                    <RegularText style={styles.seeAll}>See All</RegularText>
                </TouchableOpacity>
            </View>
            <View style={styles.trayContainer}>
            <FlatList 
                data={TrayData}
                showsVerticalScrollIndicator={false}
                // onScroll={onScroll}
                scrollEventThrottle={16}
                snapToAlignment="start"
                overScrollMode={"never"}
                // decelerationRate={Platform.OS === "android" ? 0.75 : 0}
                keyExtractor={(item,index) => index.toString()}
                renderItem={({item,index}) => {
                    if(item.id === "Spacer") {
                        return <View style={{width:10,height:10}} />
                    }

                    return (
                        // <TouchableNativeFeedback key={item.id} onPress={() => navigation.navigate("Shared", {
                        //     screen:"MovieDetails",
                        //     params:{ item }
                        // })}>
                        <TouchableNativeFeedback key={item.id} onPress={() => navigation.push("MovieDetails", { item })}>
                            <View style={styles.tray}>
                                <SharedElement id={`image.${item.id}`}>
                                    <Image source={item.image} />
                                </SharedElement>
                                <SharedElement style={styles.rating} id={`rating.${item.id}`} > 
                                {/* <View  > */}
                                    <SearchIcon width="20" height="20" fill={Colors.secondary} />
                                    <MediumText style={styles.ratingText}>3.2</MediumText>
                                {/* </View> */}
                                </SharedElement>
                            </View>
                        </TouchableNativeFeedback>
                    )
                }}
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical:12
    },
    trayHead:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:16,
    },
    seeAll:{
        color:Colors.primary,
        fontSize:16,
        paddingHorizontal:16,
    },
    headText:{
        fontSize:18,
        color:'white',
        paddingHorizontal:16,
    },
    trayContainer:{
        flexDirection:'row',
    },
    tray:{
        marginHorizontal:6,
        borderRadius:12,
        overflow:'hidden',
        width:135,
        height:178,
        resizeMode:"cover"
    },
    rating:{
        flexDirection:"row",
        alignItems:"center",
        position:"absolute",
        top:10,
        right:10,
        // backgroundColor:"rgba(37, 40, 54, .7)",
        padding:5,
        borderRadius:8
    },
    ratingText:{
        color:Colors.secondary,
        marginHorizontal:5,
        opacity:1,
        fontSize:14
    }
})

export default Tray;