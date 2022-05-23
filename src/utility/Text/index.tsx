import React from "react";
import {Text} from "react-native";

export const BoldText = ({children,style,...rest}) => {

    return(
        <Text {...rest} style={{fontFamily:"Poppins-Bold",...style}}>
            {children}
        </Text>
    )
}

export const RegularText = ({children,style,...rest}) => {

    return(
        <Text {...rest} style={{fontFamily:"Poppins-Regular",...style}}>
            {children}
        </Text>
    )
}

export const MediumText = ({children,style,...rest}) => {

    return(
        <Text {...rest} style={{fontFamily:"Poppins-Medium",...style}}>
            {children}
        </Text>
    )
}

export const SemiBoldText = ({children,style,...rest}) => {

    return(
        <Text {...rest} style={{fontFamily:"Poppins-SemiBold",...style}}>
            {children}
        </Text>
    )
}