import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Lottie from 'lottie-react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { removeItem } from '../utils/asyncStorage';

const {width, height} = Dimensions.get('window');

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleReset = async ()=>{
    await removeItem('onboarded');
    navigation.push('Onboarding');
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lottie}>
        <Lottie style={{flex:1}} source={require('../assets/animations/animation04.json')} autoPlay loop />
      </View>
      <Text style={styles.text}>Home Page</Text>
      {/* Reset Button */}
      <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
        <Text style={{color:'white', fontSize:16}}>Reset</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'white'
  },
  lottie:{
    width: width*0.8,
    height: width,
  },
  text: {
    fontSize: width*0.08,
    marginBottom: 20,
  },
  resetButton: {
    backgroundColor:'#00A4B7',
    padding:10,
    borderRadius: 10,
    width:100,
    display:'flex',
    alignItems:'center'
  }
})
