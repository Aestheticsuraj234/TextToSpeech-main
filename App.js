// Desc: Main entry point for the app
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TextToSpeech from './screens/TextToSpeech';
import { TextToSpeechProvider } from './context/TextToSpeechContext';

const Stack = createNativeStackNavigator();


function App() {

  

  return (
    <TextToSpeechProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TextToSpeech" component={TextToSpeech} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
    </TextToSpeechProvider>
  );
}

export default App;
