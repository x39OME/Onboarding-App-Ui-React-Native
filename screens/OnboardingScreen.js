import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import Lottie from 'lottie-react-native';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {setItem} from '../utils/asyncStorage';

const {width, height} = Dimensions.get('window');

export default function OnboardingScreen() {
  const navigation = useNavigation();

  const handleDone = ()=>{
    navigation.navigate('Home');
    setItem('onboarded', '1');
  }

  // Done Button 
  const doneButton = ({...props})=>{
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text>Done</Text>
      </TouchableOpacity>
      )
      
  }
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        bottomBarHighlight={true}
        DoneButtonComponent={doneButton}
        containerStyles={{paddingHorizontal: 15}}
        pages={[
          // Page 1
          {
            backgroundColor: '#bffbff',
            image: (
              <View style={styles.lottie}>
                <LottieView style={{flex:1}} source={require('../assets/animations/animation01.json')} autoPlay loop />
              </View>
            ),
            title: 'Hard Study',
            subtitle: 'Subscribe this channel to take courses and learn more',
          },
          // Page 2
          {
            backgroundColor: '#F7CA79',
            image: (
              <View style={styles.lottie}>
                <LottieView style={{flex:1}} source={require('../assets/animations/animation02.json')} autoPlay loop />
              </View>
            ),
            title: 'Hard Work',
            subtitle: 'Get your work done seamlessly without interruption',
          },
          // Page 3
          {
            backgroundColor: '#f3c5ff',
            image: (
              <View style={styles.lottie}>
                <LottieView style={{flex:1}} source={require('../assets/animations/animation03.json')} autoPlay loop />
              </View>
            ),
            title: 'Achieve your goals',
            subtitle: 'By learning more, we help you aim higher',
          },
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  lottie:{
    width: width*0.9,
    height: width,
    color: 'white'
  },
  doneButton: {
    padding: 20,
  }
})
