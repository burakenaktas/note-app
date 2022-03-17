import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconTwo from 'react-native-vector-icons/SimpleLineIcons'

export default function NotePage({ route, navigation }) {

    const [notes, setNotes] = useState([])
    const [pageTitle, setPageTitle] = useState('')

    useEffect(() => {
        if (route.params.pageTitle) {
            setPageTitle(`${route.params.pageTitle}`)
        }
    }, [route.params.pageTitle])


    useEffect(() => {
        if (route.params.title) {
            const id = Math.random() * 100
            setNotes((prevItems) => [...prevItems, { id, title: route.params.title, theNote: route.params.output }])
        }
    }, [route.params.title])

    //notlara parametreler atayıp o indexler var mı diye bakarak viewda göstermek istiyoruz max 10 tane olacak 10 tane varsa premium alsn :D
    //ama daha iyi bir yöntem vardır bence aşağıya tek tek onları yazmaktansa, map mi acaba?

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.noteHeader}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('HomeScreen')
                }}>
                    <Icon name="arrow-left" size={50} />
                </TouchableOpacity>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'darkblue' }}>{pageTitle}</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('CreateNewNote') }}><IconTwo name="note" size={25} /></TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={{ paddingLeft: 20, paddingRight: 20, }} style={{ backgroundColor: '#fff' }}>
                {route.params.output ? notes.map((note, id) => {
                    return (
                        <View key={id} style={{ width: '100%', height: 100, backgroundColor: '#fff4e0', marginTop: 20, borderRadius: 30, }}>
                            <Text style={{ marginTop: 15, marginLeft: 20, fontWeight: 'bold', color: 'darkblue' }}>{note.title}</Text>
                            <Text style={{ marginLeft: 20, marginTop: 5, marginRight: 20, }} >{note.theNote}</Text>
                        </View>
                    )
                }) : null}
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    noteHeader: {
        paddingLeft: 5,
        paddingRight: 30,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: '10%',
        backgroundColor: 'white',
    }
})