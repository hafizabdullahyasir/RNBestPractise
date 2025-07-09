import { View, Text, StyleSheet, Button, FlatList } from "react-native";  




export default function MemoizationScreen() {

return (
      <View>
       <Text>Counter: {counter}</Text>
       <Button title="Increment" onPress={increment} />
       <Text>Online Users</Text>
       <FlatList/>
      </View>




)






}