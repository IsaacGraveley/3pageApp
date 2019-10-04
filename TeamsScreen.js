import React, {Component} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import TeamCard from './Components/teams';


export default class TeamsScreen extends Component {
    render() {
      return (
      <ScrollView>
        <View style={styles.container}>
        <Text style={styles.qualified}>Teams that have qualified</Text>

        {/* Use the Cards created for the different teams in the teams file, change props accordingly to display the correct info */}
        <TeamCard teamImage = "fnatic" teamName = "Fnatic" champsWins = "2">
        </TeamCard>
        <TeamCard teamImage = "g2" teamName = "G2 eSports" champsWins = "1">
        </TeamCard>
        <TeamCard teamImage = "cloud9" teamName = "Cloud9" champsWins = "2"></TeamCard>
        <TeamCard teamImage = "ahq" teamName = "AHQ" champsWins = "0"></TeamCard>
        <TeamCard teamImage = "funPlusPheonix" teamName = "FunPlusPheonix" champsWins = "1"></TeamCard>
        <TeamCard teamImage = "GAM" teamName = "GAM eSports" champsWins = "0"></TeamCard>
        <TeamCard teamImage = "Griffin" teamName = "Griffin" champsWins = "0"></TeamCard>
        <TeamCard teamImage = "invictus" teamName = "Invictus" champsWins = "1"></TeamCard>
        <TeamCard teamImage = "Jteam" teamName = "JTeam eSports" champsWins = "0"></TeamCard>
        <TeamCard teamImage = "RNGU" teamName = "RNGU" champsWins = "0"></TeamCard>
        <TeamCard teamImage = "SKTT1" teamName = "SKT T1" champsWins = "3"></TeamCard>
        <TeamCard teamImage = "teamLiquid" teamName = "Team Liquid" champsWins = "1"></TeamCard>

      </View>
      </ScrollView>
      );
    }
  }

  //create styles for this page
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    qualified: {
      color: '#4B92CC',
      fontSize: 30,
      textAlign: 'center',
    }
  });