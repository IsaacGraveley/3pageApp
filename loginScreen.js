import React, {Component} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class LoginScreen extends Component {
    render() {
      return (
        <View style={styles.container}>
        <Text>Login</Text>
        <Button onPress={
            () =>
             this.props.navigation.navigate('Tabs')
    } title="Press me"></Button>
      </View>
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