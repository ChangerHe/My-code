import React, {Component} from 'react'
import {
    Button,
    View,
    Alert,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    StyleSheet,
    Platform
} from 'react-native'

class ButtonEvent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Button
                    onPress = {() => {
                        Alert.alert('You had clicked!')
                    }}
                    title='press me!'
                />
                {/* 注意, 当我们需要为按钮添加背景的时候, 需要在其外层套上一层view, 否则背景颜色是无法直接加到按钮上去的 */}
                <View style={{backgroundColor: '#090'}}>
                    <Button
                        onPress={() => {
                            Alert.alert('clicked!')
                        }}
                        title='press too'
                        color='#900'
                    />
                </View>
                {/* 自定义的touch对象, 点击之后按钮高亮 */}
                <TouchableHighlight underlayColor='white' onPress={() => {
                    Alert.alert('TouchableHighlight clicked!')
                }}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
                {/* 点击之后按钮透明 */}
                <TouchableOpacity onPress={() => {
                    Alert.alert('TouchableOpacity clicked!')
                }}>
                    <View style={styles.button}> 
                        <Text style={styles.buttonText}>TouchabkeOpacity</Text>
                    </View>
                </TouchableOpacity>
                {/* 直接在view对象上加onPress事件是无效的 */}
                {/* <View style={styles.button} onPress={() => {
                    Alert.alert('no out wrap')
                }}> 
                    <Text style={styles.buttonText}>no out wrap</Text>
                </View> */}
                {/* ios显示此项不支持 */}
                {/* <TouchableNativeFeedback
                    onPress={() => {
                        Alert.alert('touchableNativeFeedback clicked!')
                    }}
                    background={
                        Platform.OS === 'android' ?
                        TouchableNativeFeedback.SelectableBackground() : ''
                    }
                >
                    <View style={styles.button}> 
                        <Text style={styles.buttonText}>TouchabkeOpacity</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => {
                        Alert.alert('touchableNativeFeedback clicked!')
                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback> */}
                {/* 点击的时候无按压反馈 */}
                <TouchableWithoutFeedback
                    onPress={() => {
                        Alert.alert('TouchableWithoutFeedback clicked!')
                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableHighlight
                    onPress={() => {
                        Alert.alert('TouchableHighlight has short clicked!')
                    }}
                    onLongPress={() => {
                        Alert.alert('TouchableHighlight has long clicked!')
                    }}
                    // 长按的时候的按钮背景色, 默认为黑色, 这里将其设置为白色
                    underlayColor='orange'
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196f3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    }
})

export default ButtonEvent