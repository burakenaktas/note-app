import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { useSelector } from 'react-redux'

const Topic = ({ navigation, topic }) => {

    const state = useSelector(state => state)

    return (
        <TouchableOpacity style={{ flex: 1, }} onPress={() => navigation.navigate('NotePage', {
            pageTitle: `${topic}`
        })}>
            <Text style={{ fontSize: 40, color: state === "DARK_THEME" ? 'white' : 'darkblue', fontWeight: 'bold' }}>
                {topic}
            </Text>
        </TouchableOpacity>
    )
}

export default Topic