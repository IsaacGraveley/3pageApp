import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
export default class HomeImg extends React.Component {
    
  render() {
    var homeImg = 'https://nexus.leagueoflegends.com/wp-content/uploads/2019/09/WORLDS_Hero-Optimized_tet6rcp8js7lbk8ypf0d.jpg'
   
  return (

      <Image
          style={styles.imageStyle}
          source={{ uri: homeImg }}
        />
    
  );
}
}


const styles = StyleSheet.create({
  imageStyle: {
    padding: 0,
    width:  screenWidth,
    height: 600,
    borderRadius: 0
  }
});