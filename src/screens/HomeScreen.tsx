import { View, Text, StyleSheet, TouchableOpacity } from "react-native";      




export default function HomeScreen({navigation}: {navigation: any}) {


    return (
      <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Details")}>
            <Text style={styles.buttonText}>Go to Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Memoization")}>
            <Text style={styles.buttonText}>Go to Memoization</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Counter")}>
            <Text style={styles.buttonText}>Go to Counter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Settings")}>
            <Text style={styles.buttonText}>Go to Settings</Text>
        </TouchableOpacity>
      </View>


    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
        color: "black",
    },
    button: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: "blue",
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
    }
   
   
})