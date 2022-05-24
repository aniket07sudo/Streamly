import * as React from 'react';
import {Easing, Platform, View} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import {createSharedElementStackNavigator} from "react-navigation-shared-element";
import Details from "../../screens/MovieDetail";
import Dashboard from '../../screens/Dashboard';
import BottomTabbar from '../BottomBar/BottomTab';
import { HeaderStyleInterpolators, TransitionPresets } from '@react-navigation/stack';

const Stack = createSharedElementStackNavigator();


function Navigator(props:any) {
  
  

//   React.useEffect(() => {
//     SplashScreen.hide();
//   }, []);


  return (
      <Stack.Navigator screenOptions={{
          headerShown:false,
          // ...TransitionPresets.BottomSheetAndroid,
          // headerMode:"none",
          // animationTypeForReplace:"pop",
          transitionSpec:{
            open:{
              animation:"timing",
              config:{duration:270,delay:0,easing:Easing.out(Easing.ease)}
            },
            close:{
              animation:"timing",
              config:{duration:300,delay:0,easing:Easing.out(Easing.ease)}
            }
          },
          // cardStyleInterpolator:({current : { progress }}) => {
          //   return { cardStyle : { opacity : progress } }
          // },
          // headerStyleInterpolator:HeaderStyleInterpolators.forSlideLeft,
          cardStyle:{
            backgroundColor:"transparent",
          },
      }}>
        <Stack.Screen name="Dashboard" component={BottomTabbar} />
        {/* <Stack.Screen name="MovieDetails" component={Details} sharedElements={(route) => {
            const {item} = route.params;
            return[`image.${item.id}`,`rating.${item.id}`]
        }} /> */}
        <Stack.Screen name="MovieDetails" component={Details} sharedElements={(route) => {
            const {item} = route.params;
            if(Platform.OS === "android") {
              return [{
                id:`image.${item.id}`,
              }]
            }
            return [{
              id:`image.${item.id}`,
              animation:"move",
              resize:"clip",
            
            },{
              id:`rating.${item.id}`
            }]
        }} />
      </Stack.Navigator>
  );
}

export default Navigator