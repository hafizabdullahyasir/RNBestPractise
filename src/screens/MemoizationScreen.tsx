
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import React, { useState, useCallback, useMemo } from 'react';
import { Logger } from '../utils/Logger';



const usersData = [
    { id: '1', name: 'Alice', status: 'online' },
    { id: '2', name: 'Bob', status: 'online' },
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


const handlePress = useCallback(() => {
    setCounter(prev => prev + 1)
}, [])

const renderItem = useCallback(({item}: {item: {id: string, name: string}}) => {
    return <UserItem name={item.name} />
}, [])

const keyExtractor = useCallback((item: {id: string}) => item.id, [])




    return (
        <View style={styles.container} >
            <Text style={styles.title}>Memoization Example</Text>
            <Text>Counter: {counter}</Text>
            <Button title="Increment" onPress={handlePress} />
            <Text>Online Users</Text>
            <FlatList data={onlineUsers} keyExtractor={keyExtractor} renderItem={renderItem} />
        </View>




    )


    // whyDidYouRender(React, {
    //     trackExtraHooks: [
    //       // notice that 'useSelector' is a named export
    //       [UserItem, 'UserItem'],
    //     ]
    //   });



}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
            container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})