import { useState, useEffect } from 'react';
import { Audio } from 'expo-av';
import * as Speech from 'expo-speech';


export function useSpeechToText() {
    const [isRecording, setIsRecording] = useState(false);
    const [transcript, setTranscript] = useState('');
  
    useEffect(() => {
      // Clean up resources when the component unmounts
      return () => {
        Audio.setAudioModeAsync({ allowsRecordingIOS: false });
      };
    }, []);
  
    const startRecording = async () => {
      try {
        await Audio.requestPermissionsAsync();
        await Audio.setAudioModeAsync({ allowsRecordingIOS: true });
  
        const recording = new Audio.Recording();
        await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
  
        recording.setOnRecordingStatusUpdate((status) => {
          if (status.isRecording) {
            setIsRecording(true);
          } else {
            setIsRecording(false);
          }
        });
  
        await recording.startAsync();
      } catch (error) {
        console.error('Failed to start recording:', error);
      }
    };
  
    const stopRecording = async () => {
      try {
        const recording = Audio.getRecordingStatusAsync();
        await recording.stopAndUnloadAsync();
  
        const { uri } = recording.getURI();
        convertSpeechToText(uri);
      } catch (error) {
        console.error('Failed to stop recording:', error);
      }
    };
  
    const convertSpeechToText = async (uri) => {
      try {
        const { transcription } = await Speech.speechToTextAsync(uri);
        setTranscript(transcription);
      } catch (error) {
        console.error('Failed to convert speech to text:', error);
      }
    };
  
    return { isRecording, transcript, startRecording, stopRecording };
  }
  