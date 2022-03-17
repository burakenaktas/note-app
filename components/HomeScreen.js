import { View, Text, StatusBar, StyleSheet, TouchableOpacity, Alert, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

import Icon from 'react-native-vector-icons/FontAwesome';
import IconTwo from 'react-native-vector-icons/Ionicons';

import Footer from './HomeScreenBottom'

import { useSelector } from 'react-redux';


const HomeScreen = ({ navigation }) => {

  const [topics, setTopics] = useState([])

  const state = useSelector(state => state)

  const onSubmit = (e) => {
    setTopics((prevItems) => [...prevItems, e])
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: state === "DARK_THEME" ? 'black' : 'white' }}>
      <StatusBar backgroundColor={state === "DARK_THEME" ? 'black' : 'white'} barStyle={state === "DARK_THEME" ? 'light-content' : 'dark-content'} />
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text style={{
          marginLeft: 50, marginTop: 50, fontSize: 50, color: state === "DARK_THEME" ? '#00FFF7' : 'red',
          fontWeight: 'bold'
        }}>My</Text>
        <Text style={{
          marginTop: 50,
          fontSize: 50,
          color: state === "DARK_THEME" ? '#75F5F1' : 'darkblue',
          fontWeight: 'bold',
        }}> Notes</Text>
      </View>


      <View style={styles.topicContainer}>
        {topics.map((topic, id) => {
          return (
            <TouchableOpacity style={{ flex: 1, }} key={id} onPress={() => navigation.navigate('NotePage', {
              pageTitle: `${topic}`
            })}><Text style={{ fontSize: 40, color: state === "DARK_THEME" ? 'white' : 'darkblue', fontWeight: 'bold' }}>{topic}</Text></TouchableOpacity>
          )
        })}
      </View>

      <Footer onSubmit={onSubmit} />

    </SafeAreaView >
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  title: {
    marginLeft: 50,
    marginTop: 50,
    fontSize: 50,
    color: '#E00F0F',
    fontWeight: 'bold',
  },
  topicContainer: {
    flexDirection: 'column',
    height: '50%',
    marginLeft: 50,
    marginTop: 75,
    marginBottom: 50,
  },
})