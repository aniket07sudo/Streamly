import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import Dashboard from '../screens/Dashboard';
import Search from '../screens/Search';
import SplashScreen from 'react-native-splash-screen';
import BottomTabbar from './BottomBar/BottomTab';
import {Animated} from "react-native";
import PrivacyPolicy from '../screens/PrivacyPolicy';
import MovieDetail from "../screens/MovieDetail";
import SharedNavigation from "../navigation/Shared";

const Stack = createStackNavigator();

function Navigator(props:any) {

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  // const forFade = ({ current }) => ({
  //   cardStyle: {
  //     opacity: current.progress,
  //   },
  // });

  // const forSlide = ({ current, next, inverted, layouts: { screen } }) => {
    // const progress = Animated.add(
    //   current.progress.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [0, 1],
    //     extrapolate: 'clamp',
    //   }),
    //   next
    //     ? next.progress.interpolate({
    //         inputRange: [0, 1],
    //         outputRange: [0, 1],
    //         extrapolate: 'clamp',
    //       })
    //     : 0
    // );

  //   const progress = current.progress.interpolate({
  //     inputRange: [0, 1],
  //     outputRange: [0, 1],
  //     extrapolate: 'clamp',
  //   })
  
  //   return {
  //     cardStyle: {
  //       transform: [
  //         {
  //           translateX: Animated.multiply(
  //             progress.interpolate({
  //               inputRange: [0, 1, 2],
  //               outputRange: [
  //                 screen.width, // Focused, but offscreen in the beginning
  //                 0, // Fully focused
  //                 screen.width, // Fully unfocused
  //               ],
  //               extrapolate: 'clamp',
  //             }),
  //             inverted
  //           ),
  //         },
  //       ],
  //     },
  //   };
  // };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown:false,
          // cardStyleInterpolator:forSlide
      }}>
        {/* <Stack.Screen name="Dashboard" component={BottomTabbar} /> */}
        <Stack.Screen name="Shared" component={SharedNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator