import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Animated } from 'react-native';
import HomeImg from './Components/landingImg';
import PlayerCard from './Components/players';


export default class HomeScreen extends Component {

  //create animation start values
  slideAnimation = new Animated.Value(-100);
  Animation = new Animated.Value(0);
  blinkAnimation = new Animated.Value(-500);
  fadeRestIn = new Animated.Value(0);
  
  //when the component loads create these animations
  componentDidMount() {
      Animated.timing(this.Animation, {
      duration: 2000,
      toValue: 1
    }).start()
  
    Animated.spring(this.slideAnimation,{
      toValue: 0,
      stiffness: 1,
    }).start()

    Animated.spring(this.blinkAnimation,{
      toValue: 1,
      speed: 0,
      bounciness: 1,
    }).start()

      Animated.timing(this.fadeRestIn, {
        duration: 6000,
        toValue: 1
      }).start()
  }

    render() {
      return (
        //create a scroll view container for the page with the bg styles.
        <ScrollView style={styles.bg}>
          <View style={styles.container}>
            <HomeImg></HomeImg>
            {/* use an animation with the text that'll give it a blinking effect */}
            <Animated.Text style={{...styles.text, opacity: this.blinkAnimation}}>League of Legends{"\n"}
            2019 World Championships</Animated.Text>
            <Text style={styles.lookOut}>Players to look out for</Text>
            {/* Use the playercards created in the players component file, pass in different props for the names, images and captions */}
            <PlayerCard playerImage = "doublelift" playerName = "DoubleLift - Team Liquid" playerCaption = "DoubleLift is a long time veteran in competitive league of legends. Playing as an ADC for many high tier teams such as CLG, Curse, TSM and now Team Liquid. He has a total of 9 penta kills in competitive play"></PlayerCard>
            <PlayerCard playerImage = "rekkles" playerName = "Rekkles - Fnatic" playerCaption = "Rekkles is another long time veteran in the leagues championship series, Playing as an adc for many high tier teams, Rekkles has been dominating the league since 2013 and has won 2 championships."></PlayerCard>
            <PlayerCard playerImage = "caps" playerName = "Caps - G2 Esports" playerCaption = "Caps is a little newer to the championship league, but his skills are unmatched, being nicknamed baby faker, for his exceptional mechanics, he can find a way to beat any midlaner and pull of the best plays"></PlayerCard>    
        </View>
      </ScrollView>
      );
    }
  }

  //create styles for this screen.
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#23395B'
    },

    homeText: {
      marginTop: 20,
      color: 'white',
      fontSize: 30,
      textAlign: "center"
    },

    bg: {
      backgroundColor: '#23395B'
    },

   lookOut: {
    marginTop: 60,
      color: 'white',
      fontSize: 30,
      textAlign: "center"
   },
   text: {
    marginTop: 20,
      color: 'white',
      fontSize: 30,
      textAlign: "center"
  },
  box:{
    borderRadius: 100,
    backgroundColor: 'blue',
    width: 150,
    height: 150
  },

  boxText: {
    textAlign: "center",
    top: 60,
    color: "white"
  }
  });