import React, {Component} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import TeamCard from './Components/teams';


export default class SettingsScreen extends Component {
    render() {
      return (
      <ScrollView>
        <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <TeamCard teamImage = "fnatic" teamName = "Fnatic" champsWins = "2">
        </TeamCard>
        <TeamCard teamImage = "g2" teamName = "G2 eSports" champsWins = "2">
        </TeamCard>
        <TeamCard teamImage = "cloud9" teamName = "Cloud9" champsWins = "2"></TeamCard>
        <TeamCard teamImage = "ahq" teamName = "AHQ" champsWins = "2"></TeamCard>
        <TeamCard teamImage = "funPlusPheonix" teamName = "FunPlusPheonix" champsWins = "2"></TeamCard>
        <TeamCard teamImage = "GAM" teamName = "GAM eSports" champsWins = "2"></TeamCard>
        <TeamCard teamImage = "Griffin" teamName = "Griffin" champsWins = "2"></TeamCard>
        <TeamCard teamImage = "invictus" teamName = "Invictus" champsWins = "2"></TeamCard>
        <TeamCard teamImage = "Jteam" teamName = "JTeam eSports" champsWins = "2"></TeamCard>
        <TeamCard teamImage = "RNGU" teamName = "RNGU" champsWins = "2"></TeamCard>
        <TeamCard teamImage = "SKTT1" teamName = "SKT T1" champsWins = "2"></TeamCard>
        <TeamCard teamImage = "teamLiquid" teamName = "Team Liquid" champsWins = "2"></TeamCard>
      </View>
      </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });