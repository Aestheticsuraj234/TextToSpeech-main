import React, { useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { TextToSpeechContext } from '../context/TextToSpeechContext';

const TextInputBox = () => {
  const { text, setText, copyText, deleteText } = useContext(TextToSpeechContext);

  return (
    <View style={styles.textInputContainer}>
      <TextInput
        placeholder="What's Happening?"
        style={styles.textInput}
        numberOfLines={10}
        multiline
        value={text}
        onChangeText={setText}
        placeholderTextColor="#fff"
      />
      <View style={styles.iconContainer}>
        <View style={styles.iconDelete}>
          <AntDesign name="delete" size={24} color="#fff" onPress={deleteText} />
        </View>
        <View style={styles.iconCopy}>
          <Feather name="copy" size={24} color="#fff" onPress={copyText} />
        </View>
      </View>
    </View>
  );
};

export default TextInputBox;

const styles = StyleSheet.create({
  textInputContainer: {
    width: '90%',
    marginHorizontal: 20,
    height: 300,
    backgroundColor: '#55545F',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    padding: 10,
    width: '100%',
    height: '100%',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 72,
    padding: 10,
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
  },
});
