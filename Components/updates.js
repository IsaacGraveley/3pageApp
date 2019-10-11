import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions, Animated, Easing } from 'react-native';

//get the screen width and make it a variable
const screenWidth = Math.round(Dimensions.get('window').width);

//this file creates a component to be used on the updateScreen page, to resemble news like article postings with a title, image and caption

//create an array of images to be used in the props value.
const updateImages = {
    liquidUpdate: require('./images/liquidUpdate.jpg'),
    sktUpdate: require('./images/skt_team.jpg'),
    fnaticUpdate: require('./images/fnatic_team.png')
  };

export default class UpdateBloc extends React.Component {
  slideFromLeft = new Animated.Value(-100);
  slideFromRight = new Animated.Value(-100);
  titleSlide = new Animated.Value(-100);
  titleSlideTop = new Animated.Value(100);

  //when the component mounts/is loaded, create these animation values.
  componentDidMount(){

    //an animation of 2 seconds with ease, end up at a value of 0 by end of animation
    Animated.timing(this.slideFromLeft, {
      duration: 2000,
      toValue: 0,
      easing: Easing.ease
      }).start()
        //an animation of 2 seconds with ease, end up at a value of 0 by end of animation
      Animated.timing(this.slideFromRight, {
        duration: 2000,
        toValue: 0,
        easing: Easing.ease
        }).start()
        //an animation of 2 seconds with ease, end up at a value of 0 by end of animation
        Animated.timing(this.titleSlide, {
          duration: 2000,
          toValue: 0,
          easing: Easing.ease
          }).start()
          //an animation of 2 seconds with ease, end up at a value of 0 by end of animation
          Animated.timing(this.titleSlideTop, {
            duration: 2000,
            toValue: 0,
            easing: Easing.ease
            }).start()
  }
    
  render() {
  return (
    <Animated.ScrollView contentContainerStyle={styles.updateImageContainer}>
      {/* setup an image for the component, with the prop name of updateTitle */}
      {/* Use the slide left animation and the slide top animation to animate the titles position */}
        <Animated.Text style={{...styles.updateTitle, left:this.titleSlide, top:this.titleSlideTop}}>{this.props.updateTitle}</Animated.Text>
        {/* setup an image for the component, with the prop name of updateImage */}
        {/* animate the image to slide from the left with the animation defined above */}
        <Animated.Image
          style={{...styles.imageStyle, left: this.slideFromLeft}}
          source={updateImages[this.props.updateImage]}
        />
        {/* setup an image for the component, with the prop name of updateCaption */}
        {/* Use the slide left animation and the slide top animation to animate the captions position */}
      <Animated.Text style={{...styles.updateCaption, right: this.slideFromRight}}>{this.props.updateCaption}</Animated.Text>
    </Animated.ScrollView>
  );
}
}

//create styles for the component
const styles = StyleSheet.create({
  updateImageContainer: { 
    marginTop: '5%',
    flex: 1,
    padding: 10,
    width: screenWidth,
    height: '100%',
    backgroundColor: '#23395B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageStyle: {
    width: screenWidth,
    height: 200,

  },

  updateTitle: {
    flex: 1,
    color: 'white',
    fontSize: 30,
    fontFamily: 'Futura',
    textAlign: "left"
  },
  updateCaption: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    fontFamily: 'Futura'
  }
});