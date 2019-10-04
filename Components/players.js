import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';

//this page creates a component with an image, title and caption, to be used on the home page

//get the screen width and make it a variable
const screenWidth = Math.round(Dimensions.get('window').width);
//create an array for the paths of the images, and a name associated to them to call in later.
const playerImages = {
    doublelift: require('./images/doublelift.png'),
    rekkles: require('./images/rekkles.png'),
    caps: require('./images/g2Caps.png')
  };

export default class PlayerCard extends React.Component {
    
  render() {
  return (
    <ScrollView contentContainerStyle={styles.imageContainer}>
      {/* setup an image for the component, with the prop name of playerImage */}
      <Image
          style={styles.imageStyle}
          source={playerImages[this.props.playerImage]}
        />
        {/* setup an image for the component, with the prop name of playerImage */}
        <Text style={styles.playerName}>{this.props.playerName}</Text>
        {/* setup a text tag for the component, with the prop name of playerCaption */}
      <Text style={styles.playerCaption}>{this.props.playerCaption}</Text>
    </ScrollView>
  );
}
}

//create styles for the component
const styles = StyleSheet.create({
  imageContainer: {   
    flexDirection: 'row',
    marginTop: '5%',
    flex: 1,
    padding: 10,
    width: screenWidth,
    height: '100%',
    backgroundColor: '#23395B',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  imageStyle: {
    
    width: 300,
    height: 300,
    resizeMode: 'contain',

  },

  playerName: {
    color: 'white',
    width: 200,
      textAlign: 'right',
    marginTop: -100,
    marginRight: -180,
    flexDirection: 'column',
    // flex: 1,
    // color: '#4B92CC',
    fontSize: 18,
    fontFamily: 'Futura',
  },
  playerCaption: {
    color: 'white',
      width: 200,
      marginTop: 100,
      flexDirection: 'column',
    // flex: 1,
    // color: '#4B92CC',
    fontSize: 12,
    fontFamily: 'Futura'
  }
});