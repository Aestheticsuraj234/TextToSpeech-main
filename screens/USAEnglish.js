import * as React from 'react';
import { View, Text, Image, TextInput, Pressable,StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

function USAEnglish() {
   
    const navigation = useNavigation();
    const { text, setText } = React.useState("")

    const headerComponent = () => (
        <View style={{ height: 120, width: '100%', marginTop: 38, backgroundColor: '#A794FC', alignItems: 'center' }}>
            <Ionicons
                name="arrow-back"
                size={24}
                color="white"
                style={{ position: 'relative', right: 160, top: 6 }}
                onPress={() => navigation.goBack()} // Pass a callback function
            />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: 66,
                width: 120,
                elevation: 5,
                margin: -4,
                backgroundColor: '#fff',
                borderRadius: 8
            }}>
                <Image
                    source={require('../assets/USA_FLAG.png')} // Replace with the path to your actual flag icon image
                    style={{ width: 100, height: 56, aspectRatio: 16 / 9 }}
                />
            </View>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', padding: 8 }}>USA English</Text>
        </View>
    );

    return (
        <View>
            {/* Set the custom header component */}
            {headerComponent()}
            {/* Rest of your screen content */}
            <View style={{
                elevation: 10
            }}>
                <TextInput
                    style={{
                        height: 60,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                        borderRadius: 15,
                        borderColor: '#A794FC',
                        fontSize: 15,
                        color: '#585454'
                    }}
                    onChangeText={setText}
                    placeholder='Enter Your word here'
                    value={text}
                    caretHidden
                />
            </View>

            <Pressable
                style={{
                    height: 60,
                    width: 60,
                    borderRadius: 30,
                    backgroundColor: '#fff',
                    alignSelf: 'center',
                    elevation: 10,
                    marginTop:40

                }}
            >
                <Image
                    source={require('../assets/speakerIcon.png')}
                    style={{
                        height: 35,
                        width: 35,
                        alignSelf: 'center',
                        marginTop: 12
                    }}
                />
            </Pressable>
            <Text
                style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#A794FC',
                    alignSelf: 'center',
                    marginTop: 20
                }}>
                Tap to speak!
            </Text>

            <Pressable
                style={{
                    height: 80,
                    width: 80,
                    borderRadius: 40,
                    backgroundColor: '#fff',
                    alignSelf: 'center',
                    elevation: 10,
                    margin:230

                }}
            >
                <FontAwesome
                    name="microphone"
                    size={30} 
                    color="black"
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        paddingTop:10,
                        alignSelf: 'center',
                        marginTop: 14
                    }}

                />
            </Pressable>


        </View>
    );
}

export default USAEnglish



const styles = StyleSheet.create({
    container: {},
    header: {},
    textInput: {},
    button: {},
    buttonText: {},
    footer: {}
    
})