import React, {Component} from 'react'
import {Text, View, FlatList, SectionList, Alert} from 'react-native'

class FlatListCom extends Component {
    render() {
        return (
            <View>
                <View>
                    <FlatList
                        data={[
                            {key: 'Devin'},
                            {key: 'Jackson'},
                            {key: 'James'},
                            {key: 'Joel'},
                            {key: 'John'},
                            {key: 'Jillian'},
                            {key: 'Jimmy'},
                            {key: 'Julie'},
                        ]}
                        renderItem={({item}) => <Text>{item.key}</Text>}
                    >
                    </FlatList>
                </View>
                {/* 需要有一个独一无二的key, 此渲染问题未解决 */}
                {/* <View>
                    <SectionList
                        sections={[
                            {title: 'D', data: ['Devin']},
                            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                        ]}
                        renderItem={({item}) => {
                            return (
                                <Text keys={item}>{item}</Text>
                            )
                        }}
                        renderSectionHeader={({section}) => {
                            return (
                                <Text keys={section.title}>{section.title}</Text>
                            )
                        }}
                    />
                </View> */}
            </View>
        )
    }
}

export default FlatListCom