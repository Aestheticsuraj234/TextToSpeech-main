import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState, useContext } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { TextToSpeechContext } from '../context/TextToSpeechContext';

const ControlBox = () => {
  const { convertTextToSpeech, handlePitchChange, handleSpeedChange,  rate, pitch, language} = useContext(TextToSpeechContext);

  return (
    <View style={styles.VoiceControllerContainer}>
      <View style={styles.VoiceControllerHeader}>
        {/* Wanted to  make a Drop down with Flags and their text into dropdown */}
        <View style={styles.LanguageSelector}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/USA_FLAG.png')}
          />
          <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}>English(USA)</Text>
        </View>

        <Pressable style={styles.iconDelete} onPress={convertTextToSpeech}>
          <Image
            source={require('../assets/speakerIcon.png')}
            style={styles.speakerIcon}
          />
        </Pressable>
      </View>
      <View style={styles.VoiceControllerBody}>
        <Pressable style={styles.VoiceControllerElements}>
          <Text style={styles.VoiceControllerElementsText}>Speed</Text>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0.25}
            maximumValue={2}
            value={rate}
            onValueChange={handleSpeedChange}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            thumbTintColor="#EDE51e"
          />
        </Pressable>
        <Pressable style={styles.VoiceControllerElements}>
          <Text style={styles.VoiceControllerElementsText}>Pitch</Text>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={1}
            maximumValue={2}
            value={pitch}
            onValueChange={handlePitchChange}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            thumbTintColor="#F52F83"
          />
        </Pressable>

      </View>
    </View>
  );
}

export default ControlBox;

const styles = StyleSheet.create({
    VoiceControllerContainer: {
        width: '90%',
        marginHorizontal: 20,
        height: 250,
        backgroundColor: '#55545F',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,

    },
    VoiceControllerHeader: {
        width: '100%',
        height: 62,
        borderRadius: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20,
        flexDirection: 'row',
        //padding: 10

    },
    iconDelete: {
        width: 50,
        height: 50,
        backgroundColor: '#EDE51e',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconCopy: {
        width: 50,
        height: 50,
        backgroundColor: '#F52F83',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignItems: 'center',
    }
    ,
    tinyLogo: {
        width: 45,
        height: 45,
        aspectRatio: 16 / 9,
        borderRadius: 5
    },
    LanguageSelector: {

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
        gap: 12

    },
    speakerIcon: {
        height: 30,
        width: 30
    }
    ,VoiceControllerBody:{
        width: '90%',
        marginHorizontal: 20,
        height: 160,
        backgroundColor: '#39393F',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom:28
        
    },
    VoiceControllerElements:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    VoiceControllerElementsText:{
        color:'#fff',
        fontSize:15,
        fontWeight:'bold'
        
    }
})