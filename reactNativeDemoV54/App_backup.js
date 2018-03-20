import React from 'react';
import {StackNavigator} from 'react-navigation'
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    NavigatorIOS,
    TouchableHighlight
} from 'react-native';
import Greeting from './components/Greeting'
import Blink from './components/Blink'
import FlexBlock from './components/FlexBlock'
// import InputBlock from './components/InputBlock'
import ButtonEvent from './components/ButtonEvent'
import FlatListCom from './components/FlatListCom'

const App = StackNavigator({
    Main: {
        screen: MainScreen
    },
    Profile: {
        screen: ProfileScreen
    }
})

// class MainScreen extends React.Component {   static navigationOptions = {
// title: 'Welcome'   }   render() {     const {navigate} =
// this.props.navigation     return (       <Button         title='goto profile'
//         onPress = {           () => {             navigate('Profile', {name:
// 'Jane'})           }         }       ></Button>     )   } } class
// ProfileScreen extends React.Component {   static navigationOptions = {
// title: 'Welcome ProfileScreen'   }   render() {     const {navigate} =
// this.props.navigation     return (       <Button         title='goto profile'
//         onPress = {           () => {             navigate('Main', {name:
// 'Jane'})           }         }       ></Button>     )   } }

class MyScene extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        navigator: PropTypes.object.isRequired
    }

    constructor(props, context) {
        super(props, context);
        this._onForward = this
            ._onForward
            .bind(this);
    }

    _onForward() {
        this
            .props
            .navigator
            .push({
                title: 'Scene ' + nextIndex
            });
    }

    render() {
        return (
            <View>
                <Text>Current Scene: {this.props.title}</Text>
                <TouchableHighlight onPress={this._onForward}>
                    <Text>Tap me to load the next scene</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default class App extends React.Component {
    render() {
        //     let pic = { uri :
        // 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        // }
        return (
            <NavigatorIOS
                initialRoute={{
                component: MyScene,
                title: 'My Initial Scene',
                passProps: {
                    myProp: 'foo'
                }
            }}/>
        // <ScrollView>   <View style={styles.container}>     <Text
        // style={styles.red}>Open up App.js to start working on your app!</Text>
        // <Text style={styles.bigBlue}>Changes you make will automatically
        // reload.</Text>     <Text style={[styles.bigBlue, styles.red]}>Shake your
        // phone to open the developer menu.</Text>     <Text>hello world1111</Text>
        // <Image source={pic} style={{width: 193, height: 110}}/>     <Greeting
        // userName='Changer He'/>     <Blink text='lorem adadaddadadadadasda'/>
        // <FlexBlock></FlexBlock>     <InputBlock></InputBlock>     <ButtonEvent/>
        // <FlatListCom/>     <MainScreen/>     <NavigatorIOS       initialRoute={{
        //    component: MyScene,         title: 'My Initial Scene',         passProps:
        // { myProp: 'foo' },       }}     />   </View> </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bigBlue: {
        color: 'blue',
        fontSize: 20,
        fontWeight: 'bold'
    },
    red: {
        color: 'red'
    }
});
