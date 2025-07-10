import React from "react"
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native"
import useCounterStore from "../store/counterStore"
import { Logger } from "../utils/Logger"
import { useDeepEffect } from "react-native-best-practice"
import { useState } from "react"










export default function CounterScreen() {
    const { count, increment, decrement } = useCounterStore();
    const [user, setUser] = useState({ id: 1, name: 'Alice', settings: { darkMode: true, notifications: true } });



    useDeepEffect(() => {
        Logger.info(`user changed`, user);
    }, [user]);

    
    
    Logger.info(`CounterScreen rendered`);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{count}</Text>
            <TouchableOpacity onPress={increment} style={styles.button}>
                <Text style={styles.buttonText}>Increment</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={decrement} style={styles.button}>
                <Text style={styles.buttonText}>Decrement</Text>
            </TouchableOpacity>
           <View>
           <Button
  title="Toggle Dark Mode"
  onPress={() => {
    setUser((prev) => ({
      ...prev,
      settings: { ...prev.settings, darkMode: !prev.settings.darkMode },
    }));
  }}
/>  

           </View>

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
        fontWeight: 'bold',
        color: 'black',
    },
    button: {
        margin: 10,
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonText: {
        color: 'white',
    }
})