import { View, Text, StyleSheet, Button, FlatList } from "react-native";  
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Logger } from '../utils/Logger';



const usersData = [
    { id: '1', name: 'Alice', status: 'online' },
    { id: '2', name: 'Bob', status: 'offline' },
    { id: '3', name: 'Charlie', status: 'online' },
  ];





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