import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const START = 1;
const STEP = 1;

const App = () => {
    const [count, setCount] = useState(START);

    const fizzBuzz = (num: number) => {
        if (num % 3 === 0 && num % 5 === 0) {
            return 'fizz buzz';
        } else if (num % 3 === 0) {
            return 'fizz'
        } else if (num % 5 === 0) {
            return 'buzz'
        } else {
            return num
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fizz Buzz</Text>
            <Text>{fizzBuzz(count)}</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title={`+${STEP}`}
                    color='#193cff'
                    onPress={() => setCount(count + STEP)}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title='Reset'
                    color='#ff055d'
                    onPress={() => setCount(START)}
                />
            </View>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#303030',
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        marginBottom: 50
    },
    buttonContainer: {
        width: 200,
        paddingTop: 20
    }
});


export default App;
