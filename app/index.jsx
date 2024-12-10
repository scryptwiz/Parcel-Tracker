import {StatusBar} from 'expo-status-bar';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {router} from "expo-router";
import {styles} from "../assets/styles/general";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerCont}>
                <Text>Open up App.js to start working on your app!</Text>
                <Pressable onPress={() => router.push('/hello')} style={styles.redirButton}>
                    <Text>Not found page</Text>
                </Pressable>
            </View>
            <StatusBar backgroundColor="#fff" style="dark"/>
        </SafeAreaView>
    );
}
