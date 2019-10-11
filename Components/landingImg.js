import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions, Animated } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
export default class HomeImg extends React.Component {

  slideLeft = new Animated.Value(-1000);
  
  componentDidMount() {
    Animated.spring(this.slideLeft,{
      bounciness: 0,
      speed: 0,
      toValue: 0,
    }).start()
  }

  //this file creates an img for the home page, and is used in the home file after
    
  render() {
    var homeImg = 'https://nexus.leagueoflegends.com/wp-content/uploads/2019/09/WORLDS_Hero-Optimized_tet6rcp8js7lbk8ypf0d.jpg'
   
  return (

      <Animated.Image
          style={{...styles.imageStyle, left:this.slideLeft}}
          source={{ uri: homeImg }}
        />
  );
}
}

//styles for the img
const styles = StyleSheet.create({
  imageStyle: {
    padding: 0,
    width:  screenWidth,
    height: 600,
    borderRadius: 0
  }
});