/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Navigator from './src/navigation';
import Splashscreen from "./src/screens/Splashscreen";
import { lazy,Suspense} from "react";
import {Provider} from "react-redux";
import store , {persistor} from './src/store';
import { PersistGate } from 'redux-persist/integration/react';

// const Navigator = lazy(() => import("./src/navigation"));

const App: () => Node = () => {

  return (
    <Provider store={store}>
        {/* <StatusBar barStyle="light-content" translucent /> */}
      {/* <SafeAreaView style={{flex: 0, backgroundColor: '#1F1D2B'}}/> */}
      {/* <PersistGate persistor={persistor} loading={<Splashscreen />} > */}
        {/* <SafeAreaView style={{flex:1,backgroundColor:"#1F1D2B"}}> */}
            {/* <Splashscreen /> */}

            {/* <Suspense fallback={<Text>Loading..</Text>}> */}
            {/* <Splashscreen /> */}
            <Navigator />
        {/* </SafeAreaView> */}

            {/* </Suspense> */}
      {/* </PersistGate> */}
    </Provider>
  );
};

export default App;
