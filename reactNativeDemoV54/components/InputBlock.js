import React from 'react'
import {Text, View, TextInput} from 'react-native'

class InputBlock extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			text: '1'
		}
	}

	render() {
		return (
			<View style={{padding: 10, width: 300, height: 800}}>
				<TextInput 
					style={{width: 100, height: 100, padding: 20, backgroundColor: '#000'}} 
					placeholder="type here"
					onChangeText = {
						text => text.setState({text})
					}
				/>
				<Text style={{padding: 10, fontSize: 20}}>
					{
						this.state.text.split(' ').map((v) => {
							return v && '🍕'
						}).join(',')
					}
				</Text>
			</View>
		)
	}
}

export default InputBlock