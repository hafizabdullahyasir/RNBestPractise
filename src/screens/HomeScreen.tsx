import { View, Text, StyleSheet, Button } from "react-native";      




export default function HomeScreen({navigation}: {navigation: any}) {


    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="Go to Details" onPress={() => navigation.navigate("Details")} />
        <Button title="Go to Memoization" onPress={() => navigation.navigate("Memoization")} />
      </View>


    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})