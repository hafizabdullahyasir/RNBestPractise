import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { getFromStorage, saveToStorage } from "../storage/mmkv";
import { Logger } from "../utils/Logger";




export default function SettingsScreen() {
    const [DarkMode, setDarkMode] = useState(false);



    useEffect(() => {
        const loadSettings = async () => {
            const saved = await getFromStorage('dark-mode');
            if(saved !== null){
                Logger.info('Loaded dark mode from storage', saved);
                setDarkMode(saved);
            }
        }
        loadSettings();
    },[])


    const toggleDarkMode = async () => {
        const newValue = !DarkMode;
        setDarkMode(newValue);
        await saveToStorage('dark-mode', newValue);
        Logger.info(`💾 Dark mode saved: ${newValue}`);
      };

    return (
        <View style={styles.container}>
            <Text>Settings</Text>
            <Text style={styles.text}>Dark Mode: {DarkMode ? 'On' : 'Off'}</Text>
            <TouchableOpacity onPress={toggleDarkMode} style={styles.button}>
                <Text style={styles.buttonText}>Toggle Dark Mode</Text>
            </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
        color: 'black',
    },
    button: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
                }
})  