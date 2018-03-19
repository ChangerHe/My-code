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
                <View style={{flex: 1, paddingTop: 22}}>
                    <SectionList
                        sections={[
                            {title: 'D', data: ['Devin']},
                            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                        ]}
                        renderItem={({item}) => {
                            // Alert.alert(item)
                            return (
                                <View>
                                    <Text keys={item}>{item}</Text>
                                </View>
                            )
                        }}
                        renderSectionHeader={({section}) => {
                            return (
                                <Text style={{paddingTop: 2, paddingLeft: 10, paddingRight: 10, paddingBottom: 2, color: '#090', fontSize: 14, fontWeight: 'bold', backgroundColor: 'rgba(247, 247, 247, 1.0)'}} keys={section.title}>{section.title}</Text>
                            )
                        }}
                        // 此处需要额外加上key， 否则无法正常渲染
                        keyExtractor={
                            (item, index) => index
                        }
                    />
                </View>
            </View>
        )
    }
}

export default FlatListCom