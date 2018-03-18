import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Greeting from './components/Greeting'
import Blink from './components/Blink'
import FlexBlock from './components/FlexBlock'
// import InputBlock from './components/InputBlock'
import ButtonEvent from './components/ButtonEvent'


export default class App extends React.Component {
  render() {
    let pic = {
uri : 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return (
      <View style={styles.container}>
        <Text style={styles.red}>Open up App.js to start working on your app!</Text>
        <Text style={styles.bigBlue}>Changes you make will automatically reload.</Text>
        <Text style={[styles.bigBlue, styles.red]}>Shake your phone to open the developer menu.</Text>
        <Text>hello world1111</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Greeting userName='Changer He'/>
        <Blink text='lorem adadaddadadadadasda'/>
        {/* <FlexBlock></FlexBlock> */}
        {/* <InputBlock></InputBlock> */}
        <ButtonEvent/>
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
  bigBlue: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold'
  },
  red: {
    color: 'red'
  },
});
