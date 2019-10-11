import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions, Animated } from 'react-native';

//this file creats a component to display an image of a team, with their name and number of championship wins

//get the screen width and make it a variable
const screenWidth = Math.round(Dimensions.get('window').width);
//create an array for the paths of the images, and a name associated to them to call in later.
const teamImages = {
    fnatic: require('./images/Fnaticlogo.png'),
    g2: require('./images/g2.png'),
    ahq: require('./images/ahq.png'),
    cloud9: require('./images/cloud9.png'),
    funPlusPheonix: require('./images/funPlusPheonix.png'),
    GAM: require('./images/GAM.png'),
    Griffin: require('./images/Griffin.png'),
    invictus: require('./images/invictus.png'),
    Jteam: require('./images/JTeam.png'),
    RNGU: require('./images/RNGU.png'),
    SKTT1: require('./images/SKTT1.png'),
    teamLiquid: require('./images/teamLiquid.png')
  };

export default class TeamCard extends React.Component {
  //create start values for the animations
  sizeAnimation = new Animated.Value(0);
  fadeIn = new Animated.Value(0);

  //when the component loads, create these animations
  componentDidMount(){
    //add a duration of 2 seconds, and make its end value 400 for the size of the images.
      Animated.timing(this.sizeAnimation, {
        toValue: 400,
        duration: 2000
      }).start()
      
      Animated.timing(this.fadeIn, {
        toValue:1,
        duration:2000,
      }).start()
  }
  
  render() {
  return (

    <ScrollView contentContainerStyle={styles.imageContainer}>
      {/* setup an image for the component, with the prop name of playerImage */}
      <Animated.Image
          style={{...styles.imageStyle, width: this.sizeAnimation}}
          source={teamImages[this.props.teamImage]}
        />
        {/* setup an image for the component, with the prop name of teamName */}
        <Animated.Text style={{...styles.teamName, opacity: this.fadeIn}}>{this.props.teamName}</Animated.Text>
        {/* setup an image for the component, with the prop name of champsWins */}
      <Animated.Text style={{...styles.champsWins, opacity: this.fadeIn}}>Past Championships wins: {this.props.champsWins}</Animated.Text>
    </ScrollView>
  );
}
}

//create styles for the props.
const styles = StyleSheet.create({
  imageContainer: {   
    marginTop: '5%',
    flex: 1,
    padding: 10,
    width: screenWidth,
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageStyle: {
    // width: '100%',
    height: 300,
    resizeMode: 'contain',

  },

  teamName: {
    marginTop: 20,
    flex: 1,
    color: '#4B92CC',
    fontSize: 24,
    fontFamily: 'Futura',
  },
  champsWins: {
    flex: 1,
    color: '#4B92CC',
    fontSize: 24,
    fontFamily: 'Futura'
  }
});