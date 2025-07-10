import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import MemoizationScreen from "../screens/MemoizationScreen";
import CounterScreen from "../screens/CounterScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Memoization" component={MemoizationScreen} />
            <Stack.Screen name="Counter" component={CounterScreen} />
        </Stack.Navigator>
    );
}




