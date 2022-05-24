import React from "react";
import { View,Text ,TouchableOpacity} from "react-native";

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