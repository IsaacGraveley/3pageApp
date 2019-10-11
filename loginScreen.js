import React, {Component} from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image, Animated } from 'react-native';

export default class LoginScreen extends Component {

  animationSpring = new Animated.Value(-100);
  fadeIn = new Animated.Value(0);
  componentDidMount() {

    Animated.timing(this.fadeIn, {
      duration: 3500,
      toValue: 1
    }).start()

    
  Animated.spring(this.animationSpring,{
    duration: 3500,
    toValue: 0,
    speed: 0,
    bounciness: 0,
  }).start()
  }
    render() {
      return (
        <Animated.View style={{...styles.container, opacity: this.fadeIn}}>
          {/* use an image from the assets folder */}
          <Animated.Image
          style={{...styles.imageStyle, top: this.animationSpring}}
          source={require('./assets/Worlds_2019.png')}
        />
          <Animated.Text style={{...styles.welcomeTxt}}>Welcome to the League of Legends {"\n"}
         World Championships tracker app</Animated.Text>
          <Animated.Text style={{...styles.infoTxt}}>Log in with your Riot Games account</Animated.Text>
          <Text>Username</Text>
          {/* create txt inputs with the styles from down below */}
          <TextInput
      style={styles.inputArea}
      />
        <Text>Password</Text>
        <TextInput
      style={styles.inputArea}
       />
       {/* create a button, that when is pressed will switch to the tab navigator created in the app.js file */}
        <Button onPress={
            () =>
             this.props.navigation.navigate('Tabs')
        } title="Log In"></Button>
      </Animated.View>
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

    welcomeTxt: {
      marginTop: -50,
      color: '#4B92CC',
      fontSize: 24,
    },

    infoTxt: {
      marginTop: 20,
      color: '#4B92CC',
      fontSize: 14,
      paddingBottom: 10,
    },

    imageStyle: {
      width: '60%',
      height: '60%',
      resizeMode: 'contain',
    },

    inputArea: {
      height: 40,
       width: 300, 
       borderColor: 'gray', 
       borderWidth: 1, 
       borderRadius: 20
    }
  });