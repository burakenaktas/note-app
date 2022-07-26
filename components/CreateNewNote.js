import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';

import Icon from 'react-native-vector-icons/Entypo';
import IconTwo from 'react-native-vector-icons/MaterialIcons'

import { useSelector } from 'react-redux';

export default function CreateNewNote({ navigation }) {

    const [title, setTitle] = useState('')
    const [theNote, setTheNote] = useState('')

    const state = useSelector(state => state)

    const [selectedImage, setSelectedImage] = useState(null);

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();

        if (pickerResult.cancelled === true) {
            return;
        }

        setSelectedImage({ localUri: pickerResult.uri });
    };


    const styles = StyleSheet.create({
        noteHeader: {
            paddingLeft: 30,
            paddingRight: 30,
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            height: '10%',
            backgroundColor: state === "DARK_THEME" ? 'black' : 'white',
        },
        noteArea: {
            flex: 1,
            flexWrap: 'wrap',
            marginVertical: '10%',
            marginHorizontal: '7%',
            textAlignVertical: 'top',
            backgroundColor: state === "DARK_THEME" ? 'black' : 'white',
            color: state === "DARK_THEME" ? 'white' : 'black'
        },
        thumbnail: {
            width: 100,
            height: 100,
            resizeMode: "contain"
        }
    })

    return (
        <SafeAreaView style={{
            flex: 1, backgroundColor: state === "DARK_THEME" ? 'black' : 'white'
        }}>
            <View style={styles.noteHeader}>

                <TextInput style={{ fontSize: 28, fontWeight: 'bold', color: state === "DARK_THEME" ? 'white' : 'darkblue' }} placeholderTextColor={state === "DARK_THEME" ? 'white' : 'darkblue'} placeholder="Just Note It."
                    onChangeText={(title) => setTitle(title)}>{title}</TextInput>

                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={openImagePickerAsync}>
                        <Icon name="images" size={25} style={{ marginRight: 25, color: state === "DARK_THEME" ? 'white' : 'darkblue' }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        if (theNote === '' || title === '') return alert('Note field or title must not be empty.')
                        else {
                            navigation.navigate('NotePage', {
                                title: title,
                                output: theNote
                            })
                        }
                    }}>
                        <IconTwo name="save-alt" size={25} color={state === "DARK_THEME" ? 'white' : 'darkblue'} />
                    </TouchableOpacity>
                </View>

            </View>
            <TextInput multiline style={styles.noteArea} onChangeText={(value) => { setTheNote(value) }}>

                {selectedImage ? <View style={styles.container}>
                    <Image
                        source={{ uri: selectedImage.localUri }}
                        style={styles.thumbnail}
                    />
                </View> : null}

                {theNote}
            </TextInput>

        </SafeAreaView >)
}