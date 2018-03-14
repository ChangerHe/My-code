import React from 'react'
import {AppRegistry, View} from 'react-native'

class FlexBlock extends React.Component {
	render() {
		return (
			// 复元素必须要设置宽高, 子元素才能以flex来展示
			<View>
				<View style={{height: 300, width: 300}}>
					<View  style={{flex: 1, backgroundColor: '#900'}}></View>
					<View style={{flex: 2, backgroundColor: '#944'}}></View>
					<View style={{flex: 3, backgroundColor: '#988'}}></View>
				</View>
				<View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
					<View style={{width: 50, height: 50, backgroundColor: '#900'}}></View>
					<View style={{width: 50, height: 50, backgroundColor: '#944'}}></View>
					<View style={{width: 50, height: 50, backgroundColor: '#988'}}></View>
				</View>
			</View>
		)
	}
}

export default FlexBlock