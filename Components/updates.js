import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const updateImages = {
    liquidUpdate: require('./images/liquidUpdate.jpg'),
  };

export default class UpdateBloc extends React.Component {
    
  render() {
  return (
    <ScrollView contentContainerStyle={styles.updateImageContainer}>
        <Text style={styles.updateTitle}>{this.props.updateTitle}</Text>
        <Image
          style={styles.imageStyle}
          source={updateImages[this.props.updateImage]}
        />
      <Text style={styles.updateCaption}>{this.props.updateCaption}</Text>
    </ScrollView>
  );
}
}


const styles = StyleSheet.create({
  updateImageContainer: { 
    marginTop: '5%',
    flex: 1,
    padding: 10,
    width: screenWidth,
    height: '100%',
    backgroundColor: '#23395B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageStyle: {
    width: screenWidth,
    height: 200,

  },

  updateTitle: {
    flex: 1,
    color: 'white',
    fontSize: 30,
    fontFamily: 'Futura',
    textAlign: "left"
  },
  updateCaption: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    fontFamily: 'Futura'
  }
});