import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
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
    
  render() {
  return (
    <ScrollView contentContainerStyle={styles.imageContainer}>
      <Image
          style={styles.imageStyle}
          source={teamImages[this.props.teamImage]}
        />
        <Text style={styles.teamName}>{this.props.teamName}</Text>
      <Text style={styles.champsWins}>Past Championships wins: {this.props.champsWins}</Text>
    </ScrollView>
  );
}
}


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
    width: '100%',
    height: 300,

  },

  teamName: {
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