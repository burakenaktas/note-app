import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconTwo from 'react-native-vector-icons/Ionicons';

import { useSelector } from 'react-redux';

export default function HomeScreenBottom({ onSubmit }) {

    const [promptVisible, setPromptVisible] = useState(false)
    const [newTopic, setNewTopic] = useState('')

    const [topicCounter, setTopicCounter] = useState(0)

    const navigation = useNavigation()

    const state = useSelector(state => state)

    if (!promptVisible) {
        return (
            <View className="footer" style={{
                bottom: 0, display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
                marginLeft: 45, marginRight: 45,
            }}>

                <TouchableOpacity style={{
                    borderRadius: 50, height: 60, width: 60, backgroundColor: state === "DARK_THEME" ? 'black' : 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
                    //onPress settings
                    onPress={() =>
                        navigation.navigate('SettingsPage')
                    }
                >
                    <IconTwo name="settings-sharp" size={55} color={state === "DARK_THEME" ? '#C2C1C1' : 'black'} />

                </TouchableOpacity>

                <TouchableOpacity style={{
                    borderRadius: 50, height: 60, width: 60, backgroundColor: 'red',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }} onPress={() => {
                    setPromptVisible(!promptVisible)
                }}>
                    <Icon name="plus" size={40} color="white" />
                </TouchableOpacity>

            </View>
        )
    } else {
        return (
            <View className="footer" style={{
                bottom: 0, display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
                marginLeft: 45, marginRight: 45,
            }}>

                <TextInput style={{
                    borderRadius: 20, height: 50, width: 200, paddingHorizontal: 10, backgroundColor: state === "DARK_THEME" ? 'white' : 'black',
                    color: state === "DARK_THEME" ? 'black' : 'white', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }} onChangeText={(e) => { setNewTopic(e) }}
                />

                <TouchableOpacity style={{
                    borderRadius: 50, height: 60, width: 60, backgroundColor: 'red',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }} onPress={() => {
                    if ((topicCounter === 5 || topicCounter > 5) && newTopic === '') {
                        setPromptVisible(!promptVisible)
                    } else if (topicCounter === 5 || topicCounter > 5) {
                        alert('You can add maximum 5 topic.')
                        setPromptVisible(!promptVisible)
                        setNewTopic('')
                    } else if (topicCounter < 5 && newTopic === '') {
                        alert('Title can\'t be empty!')
                        setPromptVisible(!promptVisible)
                    } else {
                        setPromptVisible(!promptVisible)
                        onSubmit(newTopic)
                        setTopicCounter(topicCounter + 1)
                    }
                }}>
                    <Icon name="plus" size={40} color="white" />
                </TouchableOpacity>

            </View>
        )
    }

}