import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions} from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
import UpdateBloc from './Components/updates';

export default class AboutScreen extends Component {
    render() {
      return (
        <ScrollView style={styles.bg}>
          <View style={styles.container}>
          <Image
          style={styles.imageStyle}
          source={require('./assets/updates.jpg')}
        />
        <UpdateBloc updateTitle = "First Update" updateImage = "liquidUpdate" updateCaption = "With a Mid-Season Invitational final appearance and both 2019 LCS titles under their belts, there is no doubt Team Liquid head into the World Championship as the North American favorite.

At the team’s core, Yiliang “Doublelift” Peng has created a lasting legacy by winning six NA LCS titles and even becoming the first player to reach 1000 kills in the LCS. His partner in the bot lane Jo “CoreJJ” Yong-in has a World Championship title and two LCS trophies to his name. CoreJJ was also named the MVP of the Spring Split where he received 127 points, which was 72 points above his nearest rival."></UpdateBloc>
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

    bg: {
      backgroundColor: '#23395B'
    },
    imageStyle: {
      width: screenWidth,
      height: 200

    }
  });