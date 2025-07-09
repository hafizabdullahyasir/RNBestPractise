import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Logger } from '../utils/Logger';



const usersData = [
    { id: '1', name: 'Alice', status: 'online' },
    { id: '2', name: 'Bob', status: 'offline' },
    { id: '3', name: 'Charlie', status: 'online' },
];

const UserItem = React.memo(({ name }: { name: string }) => {

    Logger.info(`Rendering UserItem for ${name}`);
    return (
        <View>
            <Text>{name}</Text>
        </View>
    )
});



export default function MemoizationScreen() {
 const [counter, setCounter] = useState(0);
 const [users, setUsers] = useState(usersData);




    const onlineUsers = useMemo(()=>{
        Logger.debug(`Calculating online users`);
        return users.filter(user=> user.status === 'online')
}, [users])

const handlePress = useCallback(()=>{
    setCounter(prev => prev + 1)
},[])






    return (
        <View>
            <Text>Counter: {counter}</Text>
            <Button title="Increment" onPress={handlePress} />
            <Text>Online Users</Text>
            <FlatList data={onlineUsers} keyExtractor={item => item.id} renderItem={({item}) => <UserItem name={item.name} />} />
        </View>




    )






}