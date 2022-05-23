import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../../screens/Dashboard';
import Search from '../../screens/Search';
import Profile from "../../screens/Profile";
import Download from "../../screens/Download";
import CustomTabBar from './CustomTabbar';
import SharedNavigation from "../Shared";
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar, View } from 'react-native';
import {Colors} from "../../utility/Defaults";

const Tab = createBottomTabNavigator();

function BottomTabbar(props:any) {

  const Padding = useSafeAreaInsets();

  return (
    // <SafeAreaView style={{flex:1,backgroundColor:Colors.background}}>
      // <StatusBar barStyle="light-content" />
    <View style={{flex:1,paddingBottom:Padding.bottom,backgroundColor:Colors.background}} >
      <Tab.Navigator screenOptions={{
          headerShown:false,
          lazy:true
      }}

      tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tab.Screen name="Home" component={Dashboard} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Download" component={Download} />
      </Tab.Navigator>
      </View>
      // </SafeAreaView>
  );
}

export default BottomTabbar;