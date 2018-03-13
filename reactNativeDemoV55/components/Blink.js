import React, {Component} from 'react'
import {Text, View} from 'react-native'

class Blink extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowingText: true
        }

        setInterval(() => {
            this.setState(
                previousState => {
                    return {
                        isShowingText: !previousState.isShowingText
                    }
                }
            )
        }, 1000 )
    }

    render() {
        let displayStyle = this.state.isShowingText ? this.props.text : ''
        return (
            <Text>{displayStyle}</Text>
        )
    }
}

export default Blink