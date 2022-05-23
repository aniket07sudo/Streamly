import React from "react";
import { View,Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const PrivacyPolicy = ({navigation}) => {

    return(
        <View style={{flex:1,backgroundColor:"orangered"}}>
            <Text>Privacy Policy</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
                <Text>Backk</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PrivacyPolicy;