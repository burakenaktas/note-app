import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/HomeScreen'
import NotePage from './components/NotePage'
import CreateNewNote from './components/CreateNewNote'
import SettingsPage from './components/SettingsPage';

import { Provider } from 'react-redux'
import store from './redux/store'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="NotePage" component={NotePage} />
          <Stack.Screen name="CreateNewNote" component={CreateNewNote} />
          <Stack.Screen name="SettingsPage" component={SettingsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
