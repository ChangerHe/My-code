import React, {Component} from 'react'
import {AppRegistry, Text, View} from 'react-native'

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.userName}</Text>
        )
    }
}

export default Greeting