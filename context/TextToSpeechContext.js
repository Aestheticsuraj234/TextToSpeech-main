import React, { createContext, useState ,useEffect} from 'react'
import * as Clipboard from 'expo-clipboard';
import * as Speech from 'expo-speech'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TextToSpeechContext = createContext()

export const TextToSpeechProvider = ({ children }) => {
    // State Variables
    const [text, setText] = useState('')
    const [language, setLanguage] = useState("en-US")
    const [pitch, setPitch] = useState(1)
    const [rate, setRate] = useState(0.75)
    const [volume, setVolume] = useState(1)
    const [saved, setSaved] = useState(false)
    const [savedCount , setSavedcount] = useState(0)
    const [savedText , setSavedText] = useState([])

    // Functions


    // Write a function to copy the TextInput data to the clipboard
    const copyText = async () => {
        if(!text){
            alert("Please enter text to copy");
            return;
        }
        await Clipboard.setStringAsync(text);
        alert("Copied");
    };
    // Write a function to delete the TextInput data
    const deleteText = () => {
        if(!text){
            alert("Please enter text to delete");
            return;
        }
        setText('');
    };

    // write a function to convert text to speech
    const convertTextToSpeech = async () => {
        // Checking if the text is empty
        if (text.trim() === "") {
            alert("Please enter a text to convert to speech!");
        } else {
            // Checking if the text is more than 100 characters
            if (text.length > 100) {
                alert("Please enter text less than 100 characters!");
            } else {
                // Checking if the device is connected to the internet

                // Checking if the device is iOS
                if (Platform.OS === "ios") {
                    Speech.speak(text, {
                        language: language,
                        pitch: pitch,
                        rate: rate,
                    });
                } else {
                    Speech.speak(text, {
                        language: language,
                        pitch: pitch,
                        rate: rate,
                    });
                }

            }
        }
    };

    // Function to handle the speed change
    const handleSpeedChange = async (value) => {
        setRate(value);
    };

    //   Function to handle the Pitch

    const handlePitchChange = async (value) => {
        setPitch(value);

    }

    // FUNCTION TO HANDLE VOLUME
    const handleVolumeChange = async (value) => {
        setVolume(value);

    }

    // write a function for saving  into the loaclstorage of the phone the text with their states when some one click on save
   // write a function for saving the text to the local storage of the phone with their states when someone clicks on save
   const saveText = async () => {
    try {
      const newText = { text, language, pitch, rate };
      setSavedText(prevTexts => [...prevTexts, newText]);
      setSavedcount(prevCount => prevCount + 1);
      setSaved(true);
    } catch (e) {
      console.log(e);
    }
  };
  
  useEffect(() => {
    const saveTextToStorage = async () => {
      try {
        await AsyncStorage.setItem('@text', JSON.stringify(savedText));
        console.log(savedText);
      } catch (e) {
        console.log(e);
      }
    };
  
    saveTextToStorage();
  }, [savedText]);
  
   
    // write a function for loading the text with their states when some one clic on load
    const loadText = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@text');
          const data = JSON.parse(jsonValue);
          if (data !== null) {
            setSavedText(data);
            setSavedcount(data.length);
            // Set the state with the last saved object
            const lastSavedText = data[data.length - 1];
            setText(lastSavedText.text);
            setLanguage(lastSavedText.language);
            setPitch(lastSavedText.pitch);
            setRate(lastSavedText.rate);
            setVolume(lastSavedText.volume);
            setSaved(true);
          }
        } catch (e) {
          console.log(e);
        }
      };
      
      
    // write a function for deleting the text with their states when some one clic on delete
    const deleteSavedText = async (item) => {
        try {
          // Retrieve the saved text from AsyncStorage
          const savedTextData = await AsyncStorage.getItem('@text');
          if (savedTextData) {
            // Parse the saved text data into an array
            const savedTextArray = JSON.parse(savedTextData);
            
            // Find the index of the item to delete
            const itemIndex = savedTextArray.findIndex((textItem) => textItem.id === item.id);
            
            if (itemIndex !== -1) {
              // Remove the item from the array
              savedTextArray.splice(itemIndex, 1);
              
              // Update AsyncStorage with the modified array
              await AsyncStorage.setItem('@text', JSON.stringify(savedTextArray));
              
              // Update state variables accordingly
              setSavedText(savedTextArray);
              setSavedcount(savedTextArray.length);
              setSaved(false);
            }
          }
        } catch (e) {
          console.log(e);
        }
      };

      const convertSavedTextToSpeech = async (item) => {
        // Checking if the device is connected to the internet
      
        // Checking if the device is iOS
        if (Platform.OS === "ios") {
           Speech.speak(item.text, {
            language: item.language,
            pitch: item.pitch,
            rate: item.rate,
            volume: item.volume,
          });
        } else {
           Speech.speak(item.text, {
            language: item.language,
            pitch: item.pitch,
            rate: item.rate,
            volume: item.volume,
          });
        }
      };
      
      
    


    return (
        <TextToSpeechContext.Provider value={{ text, setText, copyText, deleteText, convertTextToSpeech, handlePitchChange, handleSpeedChange, handleVolumeChange, rate, pitch, language,saveText,loadText,deleteSavedText ,savedCount,savedText,convertSavedTextToSpeech
        }}>
            {children}
        </TextToSpeechContext.Provider>
    )
}