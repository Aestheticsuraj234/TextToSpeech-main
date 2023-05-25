import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { TextToSpeechContext } from '../context/TextToSpeechContext';

const ControlBox = () => {
  const {
    convertTextToSpeech,
    handlePitchChange,
    handleSpeedChange,
    rate,
    pitch,
    language
  } = useContext(TextToSpeechContext);

  return (
    <View style={styles.voiceControllerContainer}>
      <View style={styles.voiceControllerHeader}>
        <View style={styles.languageSelector}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/USA_FLAG.png')}
          />
          <Text style={styles.languageText}>English(USA)</Text>
        </View>

        <Pressable style={styles.iconDelete} onPress={convertTextToSpeech}>
          <Image
            source={require('../assets/speakerIcon.png')}
            style={styles.speakerIcon}
          />
        </Pressable>
      </View>

      <View style={styles.voiceControllerBody}>
        <View style={styles.voiceControllerElements}>
          <Text style={styles.voiceControllerElementsText}>Speed</Text>
          <Slider
            style={styles.slider}
            minimumValue={0.25}
            maximumValue={2}
            value={rate}
            onValueChange={handleSpeedChange}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            thumbTintColor="#EDE51e"
          />
        </View>
        <View style={styles.voiceControllerElements}>
          <Text style={styles.voiceControllerElementsText}>Pitch</Text>
          <Slider
            style={styles.slider}
            minimumValue={1}
            maximumValue={2}
            value={pitch}
            onValueChange={handlePitchChange}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            thumbTintColor="#F52F83"
          />
        </View>
      </View>
    </View>
  );
};

export default ControlBox;

const styles = StyleSheet.create({
  voiceControllerContainer: {
    width: '90%',
    marginHorizontal: 20,
    height: 250,
    backgroundColor: '#55545F',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  voiceControllerHeader: {
    width: '100%',
    height: 62,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
  iconDelete: {
    width: 50,
    height: 50,
    backgroundColor: '#EDE51e',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 45,
    height: 45,
    aspectRatio: 16 / 9,
    borderRadius: 5,
  },
  languageSelector: {
    flexDirection: 'row',
    width: '60%',
    height: 50,
    backgroundColor: '#F52F83',
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 10,
  },
  languageText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  speakerIcon: {
    height: 30,
    width: 30,
  },
  voiceControllerBody: {
    width: '90%',
    marginHorizontal: 20,
    height: 160,
    backgroundColor: '#39393F',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 28,
  },
  voiceControllerElements: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  voiceControllerElementsText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  slider: {
    width: 200,
    height: 40,
  },
});
