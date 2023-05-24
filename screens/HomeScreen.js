import { StyleSheet, Text, View, Pressable ,SafeAreaView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', margin: 10 }}>
            <View style={styles.upperContainer}>
                <Text style={{ fontSize: 16, fontWeight: 500, justifyContent: 'center', alignItems: 'center', padding: 13, textAlign: 'center', color: '#464343' }}>Select Your Pronunciation Language</Text>
            </View>
            <Pressable style={styles.lowerContainer} onPress={() => navigation.navigate('USAEnglish')} >
                <Text style={{ fontSize: 15, fontWeight: 500, alignItems: 'center', padding: 8, textAlign: 'center', color: '#464343' }}>
                    Pronunciation In USA English</Text>
            </Pressable>
            <Pressable style={styles.lowerContainer} onPress={() => navigation.navigate('BritishEnglish')}>
                <Text style={{ fontSize: 15, fontWeight: 500, alignItems: 'center', padding: 8, textAlign: 'center', color: '#464343' }}>
                    Pronunciation In British English</Text>
            </Pressable>


        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    upperContainer: {
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        width: 281,
        height: 80,
        borderRadius: 16,
        borderColor: '#A794FC',
        borderWidth: 2.5,
        marginBottom: 28

    }
    ,
    lowerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: 281,
        height: 200,
        margin: 12,
        borderRadius: 20,
        elevation: 5

    }
})