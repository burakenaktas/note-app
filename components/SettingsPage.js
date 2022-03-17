import { View, Text, Button } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

import { useDispatch, useSelector } from 'react-redux';
import { darkTheme, lightTheme } from '../redux/actions/themeAction';


const SettingsPage = () => {

    const dispatch = useDispatch()
    const state = useSelector((state) => state)

    const changeTheme = () => {
        if (state === 'DARK_THEME') {
            dispatch(lightTheme())
        } else if (state === 'LIGHT_THEME') {
            dispatch(darkTheme())
        }
    }

    return (
        <View style={{ backgroundColor: state === 'DARK_THEME' ? 'black' : 'white', flex: 1, }}>
            <View style={{
                display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                paddingLeft: 50, paddingTop: 50, paddingRight: 50
            }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: state === 'LIGHT_THEME' ? 'black' : 'white' }}>Dark Theme</Text>
                <TouchableOpacity style={{
                    backgroundColor: state === 'LIGHT_THEME' ? 'black' : 'white', height: 25, width: 60, borderRadius: 40,
                    justifyContent: 'center', alignItems: 'center'
                }} onPress={changeTheme}>
                    <Icon name="moon-o" size={20} color={state === 'DARK_THEME' ? 'black' : 'white'} />
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default SettingsPage