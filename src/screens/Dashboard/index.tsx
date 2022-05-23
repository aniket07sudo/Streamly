import React from "react";
import { View,Text, StyleSheet,Image, Platform, StatusBar} from "react-native";
import Banner from "../../components/BannerCarousel";
import SearchIcon from "../../assets/Icons/Search";
import {BoldText,SemiBoldText} from "../../utility/Text";
import Tray from "../../components/Tray";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Dashboard = () => {

    const Padding = useSafeAreaInsets();

    const Data = [
        {
            id:1,
            image:require("../../assets/Banner/Aladdin.jpg"),
        },
        {
            id:2,
            image:require("../../assets/Banner/Aladdin.jpg"),
        },
        {
            id:3,
            image:require("../../assets/Images/Pi.jpg"),
        },
        {
            id:4,
            image:require("../../assets/Images/Pi.jpg"),
        },
        {
            id:5,
            image:require("../../assets/Images/Pi.jpg"),
        },
        {
            id:6,
            image:require("../../assets/Images/Pi.jpg"),
        }
    ]

    return(
        <>
        <StatusBar barStyle="light-content" backgroundColor="rgba(31, 29, 43,0.4)" translucent />
        <ScrollView contentContainerStyle={{
            ...Platform.select({
                ios:{
                    paddingBottom:72 - Padding.bottom
                },
                android:{
                    paddingBottom:72 - Padding.bottom - 40
                }
            })
        }} style={[styles.container,{paddingTop:Padding.top}]}>
            <View style={styles.headContainer}>
                <View style={styles.head}>
                    <BoldText style={styles.headTitle}>Welcome Back,</BoldText>
                    <SemiBoldText style={styles.headName}>Aniket</SemiBoldText>
                </View>
                <View style={styles.rightHead}>
                    <SearchIcon fill="#92929D" />
                    <Image style={styles.AvatarImg} source={require("../../assets/Avatar.jpg")} />
                </View>
            </View>
            <Banner />
            <View style={styles.trayContainer}>
                <Tray label={"Trending Now"} data={Data} />
                {/* <Tray label={"New Releases"} data={Data} /> */}
                {/* <Tray label={"Us TV Dramas"} data={Data} /> */}
            </View>
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#1F1D2B",
    },
    trayContainer:{
        paddingVertical:10,
    },
    headContainer:{
        flexDirection:"row",
        padding:16,
        justifyContent:"space-between",
        alignItems:"center"
    },
    head:{
        flexDirection:"column",
    },
    rightHead:{
        flexDirection:"row",
        alignItems:"center"
    },
    headTitle:{
        fontSize:22,
        color:"#E3ECF2",
    },
    headName:{
        fontSize:20,
        color:"#4A97C5",
        ...Platform.select({
            ios:{
                lineHeight:24,
            },
            android:{
                lineHeight:22
            },
            default:{
                lineHeight:25
            }
        })
    },
    AvatarImg:{
        width:40,
        height:40,
        borderRadius:15,
        resizeMode:"cover",
        marginLeft:15
    }
})

export default Dashboard;