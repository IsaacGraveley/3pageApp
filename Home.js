import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import HomeImg from './Components/landingImg';

export default class HomeScreen extends Component {
    render() {
      return (
        <ScrollView style={styles.bg}>
        <View style={styles.container}>
        <HomeImg></HomeImg>
        <Text style={styles.homeText}>League of Legends{"\n"}
        2019 World Championships</Text>
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
    }
  });