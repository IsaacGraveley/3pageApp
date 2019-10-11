import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions, Animated} from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
import UpdateBloc from './Components/updates';

export default class UpdateScreen extends Component {
  slideUpdateIn = new Animated.Value(-100);
  slideFromLeft = new Animated.Value(-100);
  
  componentDidMount() {
      Animated.timing(this.slideUpdateIn, {
      duration: 1000,
      toValue: 0
      }).start()

      Animated.timing(this.slideFromLeft, {
        duration: 3000,
        toValue: 0
        }).start()
  }
    render() {
      return (
        <ScrollView style={styles.bg}>
          <View style={styles.container}>
          <Animated.Image
          style={{...styles.imageStyle, top:this.slideUpdateIn}}
          source={require('./assets/updates.jpg')}
        />
        {/* use the updateBloc component we created in the updates file, and pass in according properties to create news article style updates with pictures and captions and titles */}
        <UpdateBloc updateTitle = "Team Liquid qualify" updateImage = "liquidUpdate" updateCaption = "With a Mid-Season Invitational final appearance and both 2019 LCS titles under their belts, there is no doubt Team Liquid head into the World Championship as the North American favorite.

At the team’s core, Yiliang “Doublelift” Peng has created a lasting legacy by winning six NA LCS titles and even becoming the first player to reach 1000 kills in the LCS. His partner in the bot lane Jo “CoreJJ” Yong-in has a World Championship title and two LCS trophies to his name. CoreJJ was also named the MVP of the Spring Split where he received 127 points, which was 72 points above his nearest rival."></UpdateBloc>
        <UpdateBloc updateTitle = "SKT T1 preview insights" updateImage = "sktUpdate" updateCaption = "Heading into 2019, SKT was ready to come back better and fiercer than ever. Complete with a roster rebuild with a mixture of new talent and veterans, the LCK team was prepared to fight.
Spearheaded by renowned coach Kim 'kkOma' Jeong-gyun, SKT started off the 2019 season strong heading straight to the top of the standings. The team continued to find their rhythm and picked up wins resulting in a place in the Spring Split finals. SKT went head-to-head with rookies Griffin in which was supposed to be a highly anticipated series. Although, SKT’s methodical performance saw them 3-0 Griffin and take home an impressive seventh LCK title."></UpdateBloc>
       <UpdateBloc updateTitle = "Fnatic team preview" updateImage = "fnaticUpdate" updateCaption = "Most would’ve bet their money on Fnatic to keep up the momentum, but G2 stole the show and then some. Fnatic trailed through spring nipping at G2’s heels, and rounded out the split with an uninspiring third-place finish.

They were forced to sit at home and watch their rivals accomplish what they couldn’t at the 2019 Mid-Season Invitational by winning an international championship. Broxah promised that the summer split would be different, and it was.

"></UpdateBloc>
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