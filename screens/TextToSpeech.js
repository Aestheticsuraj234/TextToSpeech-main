import React, { useContext, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, Pressable, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { BottomSheet } from 'react-native-btr';

import TextInputBox from '../components/TextInputBox';
import ControlBox from '../components/ControlBox';
import { TextToSpeechContext } from '../context/TextToSpeechContext';

const TextToSpeech = () => {
  const { text, saveText, deleteSavedText, savedCount, convertTextToSpeech, savedText ,convertSavedTextToSpeech} = useContext(TextToSpeechContext);
  console.log(text);
  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  console.log("MyText:", text);
  console.log("MyText:", savedText);

  const Texts = ({ item }) => {
    return (
      <View style={styles.bottomNavigationViewItem}>
        <View style={styles.bottomContentContainer}>
          <Text style={styles.bottomContainerText}>{item.text}</Text>
          <View style={styles.bottomContainerIconContainer}>
            <AntDesign
              name="delete"
              size={24}
              color="white"
              onPress={() => deleteSavedText(item)}
            />
            <AntDesign
              name="play"
              size={24}
              color="white"
              onPress={() => convertTextToSpeech(item)}
            />
          </View>
        </View>
      </View>
    );
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>TextToSpeech</Text>
        <View style={styles.textCount}>
          <Pressable style={styles.textCountText} onPress={toggleBottomNavigationView}>
            <Text>{savedCount}</Text>
          </Pressable>
        </View>
      </View>
      {/* Text Input */}
      <TextInputBox />
      {/* Speech Controller */}
      <ControlBox />
      <Pressable onPress={saveText} style={styles.saveBtn}>
        <Text style={styles.textCountText}>Save</Text>
      </Pressable>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}
      >
        <Text style={styles.text}>Saved Text🔥</Text>
        <View style={styles.bottomNavigationView}>
          {savedText.length === 0 ? (
            <View style={styles.emptySavedTextContainer}>
              <Text style={{fontSize:18,fontWeight:600,color:'#fff'}}>No Saved Text Yet 😣</Text>
            </View>
          ) : (
            <FlatList
              data={savedText}
              renderItem={({ item }) => <Texts item={item} />}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default TextToSpeech;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242334',
    marginTop: StatusBar.currentHeight,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  textCount: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: '#33C14A',
    color: '#fff',
    width: 35,
    height: 35,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCountText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  saveBtn: {
    width: '90%',
    height: 50,
    backgroundColor: '#33C14A',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  bottomNavigationView: {
    backgroundColor: '#242334',
    width: '100%',
    height: 650,
    color: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  bottomContentContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 20,
    gap: 80,
  },
  bottomContainerText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  bottomContainerIconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  bottomNavigationViewItem: {
    width: '90%',
    height: 50,
    backgroundColor: '#242334',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  emptySavedTextContainer: {
    justifyContent:'center',
    alignItems:'center'  ,
    top:280,
    width:'100%',
    height:50,
    borderRadius:5,
    borderWidth:5,
    borderColor:'#fff'
  },
});
