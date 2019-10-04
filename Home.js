import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import HomeImg from './Components/landingImg';
import PlayerCard from './Components/players';


export default class HomeScreen extends Component {
    render() {
      return (
        //create a scroll view container for the page with the bg styles.
        <ScrollView style={styles.bg}>
          <View style={styles.container}>
            <HomeImg></HomeImg>
            <Text style={styles.homeText}>League of Legends{"\n"}
            2019 World Championships</Text>
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
   }
  });