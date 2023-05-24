import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import USAEnglish from './screens/USAEnglish';
import BritishEnglish from './screens/BritishEnglish';
import * as Permissions from 'expo-permissions';
import { Audio } from 'expo-av';
import TextToSpeech from './screens/TextToSpeech';
import { TextToSpeechProvider } from './context/TextToSpeechContext';

const Stack = createNativeStackNavigator();

function App() {


  return (
    <TextToSpeechProvider>
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="TextToSpeech" component={TextToSpeech} options={{headerShown:false}} />
        {/* <Stack.Screen name="USAEnglish" component={USAEnglish} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="BritishEnglish" component={BritishEnglish} options={{ headerShown: true }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    </TextToSpeechProvider>
  );
}

export default App;
