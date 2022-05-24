import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import TabButton from './TabButton';
import HomeIcon from '../../assets/Icons/Home';
import SearchIcon from '../../assets/Icons/Search';
import AccountIcon from '../../assets/Icons/Account';
import DownloadIcon from '../../assets/Icons/Download';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function MyTabBar({ navigation }) {

  
  const Padding = useSafeAreaInsets();
  const [ActiveFocus,setActiveFocus] = useState("Home");
  const HomeTabFlex = useSharedValue(2);
  const SearchFlex = useSharedValue(1);
  const DownloadFlex = useSharedValue(1);
  const ProfileFlex = useSharedValue(1);

  useEffect(() => {
    if(ActiveFocus == 'Home') {
       HomeTabFlex.value = withTiming(2)
    } else {
      HomeTabFlex.value = withTiming(1)
    }
    if(ActiveFocus == 'Search') {
      SearchFlex.value = withTiming(2)
    } else {
      SearchFlex.value = withTiming(1)
    }
    if(ActiveFocus == 'Download') {
      DownloadFlex.value = withTiming(2)
    } else {
      DownloadFlex.value = withTiming(1)
    }
    if(ActiveFocus == 'Profile') {
      ProfileFlex.value = withTiming(2)
    } else {
      ProfileFlex.value = withTiming(1)
    }
  },[ActiveFocus])

  const HomeStyle = useAnimatedStyle(() => ({
      flex:HomeTabFlex.value,
      
  }))

  const SearchStyle = useAnimatedStyle(() => ({
    flex:SearchFlex.value
  }))

  const DownloadStyle = useAnimatedStyle(() => ({
   flex:DownloadFlex.value
  }))

  const ProfileStyle = useAnimatedStyle(() => ({
    flex:ProfileFlex.value
  }))

  return (
    <View style={[styles.container]}>
      <TabButton
        {...{navigation}}
        label="Home"
        route="Home"
        animatedStyle={HomeStyle}
        setFocus={setActiveFocus}
        focussed={ActiveFocus == "Home"}
        Icon={({fill}) => <HomeIcon fill={fill} />}
      />
      <TabButton
        {...{navigation}}
        label="Explore"
        route="Search"
        animatedStyle={SearchStyle}
        setFocus={setActiveFocus}
        focussed={ActiveFocus == "Search"}
        Icon={({fill}) => <SearchIcon fill={fill} />}

      />
      <TabButton
        {...{navigation}}
        label="Download"
        route="Download"
        animatedStyle={DownloadStyle}
        setFocus={setActiveFocus}
        focussed={ActiveFocus == "Download"}
        Icon={({fill}) => <DownloadIcon fill={fill} />}
      />
      <TabButton
        {...{navigation}}
        label="Profile"
        route="Profile"
        animatedStyle={ProfileStyle}
        setFocus={setActiveFocus}
        focussed={ActiveFocus == "Profile"}
        Icon={({fill}) => <AccountIcon fill={fill} />}
      />
      {/* <TouchableOpacity onPress={() => navigation.navigate("Download")} style={[styles.container,{backgroundColor:"#252836"}]}>
            <Text style={{color:"white"}}>Tabbar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Policy")} style={[styles.container,{backgroundColor:"#252836"}]}>
            <Text style={{color:"white"}}>Policy</Text>
        </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        height:72,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:20,
    },
    button:{
        backgroundColor:"#252836"
    }
})

export default MyTabBar;