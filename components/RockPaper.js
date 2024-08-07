import React, { useState, useRef } from "react";
import { StyleSheet, SafeAreaView, Text, View, Animated } from 'react-native';
import Constants from 'expo-constants';
import DisplayResult from './DisplayResult';
import Actions from './Actions';
import Header from './Header';

export default function RockPaper() {
    const [userChoice, setUserChoice] = useState(0);
    const [computerChoice, setComputerChoice] = useState(0);
    const [result, setResult] = useState("");
    const [canPlay, setPlay] = useState(true);

    const fadeAnimation = useRef(new Animated.Value(1)).current;

    function play(choice) {
        const randomComputerChoice = Math.floor(Math.random() * 3) + 1;
        let result = "";

        if (choice === randomComputerChoice) {
            result = "Imbang!";
        } else if (choice === 1 && randomComputerChoice === 3) {
            result = "Menang!";
        } else if (choice === 2 && randomComputerChoice === 1) {
            result = "Menang!";
        } else if (choice === 3 && randomComputerChoice === 2) {
            result = "Menang!";
        } else {
            result = "Kalah!";
        }

        setUserChoice(choice);
        setComputerChoice(randomComputerChoice);

        setTimeout(() => {
            setResult(result);
        }, 300);

        Animated.sequence([
            Animated.timing(fadeAnimation, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnimation, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start();

        setPlay(false);
        setTimeout(() => {
            setPlay(true);
        }, 600);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.content}>
                <View style={styles.result}>
                    <Animated.Text
                        style={[styles.resultText, { opacity: fadeAnimation }]}
                    >
                        {result}
                    </Animated.Text>
                </View>
                <View style={styles.screen}>
                    {!result ? (
                        <Text style={styles.readyText}>Ayo Bermain</Text>
                    ) : (
                        <DisplayResult
                            userChoice={userChoice}
                            computerChoice={computerChoice}
                        />
                    )}
                </View>
                <Actions play={play} canPlay={canPlay} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    content: {
        flex: 1,
        backgroundColor: '#e8eaed',
        justifyContent: 'space-between', // Ensure content is spaced evenly
    },
    result: {
        height: 100,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 10,
    },
    resultText: {
        fontSize: 48,
        fontWeight: 'bold',
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    readyText: {
        textAlign: 'center',
        fontSize: 48,
        fontWeight: 'bold',
    },
});
