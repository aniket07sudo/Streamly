import React from 'react';
import LottieView from 'lottie-react-native'; 
import {Modal} from "react-native";
import { connect } from 'react-redux';
// if you have "esModuleInterop": true
// import LottieView = require('lottie-react-native'); // otherwise you have "esModuleInterop": false
const Splashscreen = (props:any) => {
  const [hasAnimationPlayedOnce, setHasAnimationPlayedOnce] = React.useState(false);

  // We only want to hide the Splash Screen after it has played at least once
  const handleAnimationFinish = () => {
    setHasAnimationPlayedOnce(true)
  }

  const isModalVisible = !(hasAnimationPlayedOnce && props.isAppInitialized);

  return (
    <Modal visible={isModalVisible} animationType="fade" style={{backgroundColor:'#fff'}}>
      <LottieView
        source={require('../../assets/splashscreen/logo.json')}
        loop={false}
        speed={1.6}
        autoPlay
        onAnimationFinish={handleAnimationFinish}
       />
    </Modal>
  )
}

const mapStateToProps = (state:any) => ({
  isAppInitialized: state.auth.appinit,
})

export default connect(mapStateToProps)(Splashscreen);
