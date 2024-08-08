import React, { useState, useRef } from "react";
import { StyleSheet, SafeAreaView, Text, View, Animated, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import DisplayResult from './DisplayResult';
import Actions from './Actions';
import colors from "../src/themes/colors";

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
            result = "SERI!";
        } else if (
            (choice === 1 && randomComputerChoice === 3) ||
            (choice === 2 && randomComputerChoice === 1) ||
            (choice === 3 && randomComputerChoice === 2)
        ) {
            result = "MENANG!";
        } else {
            result = "KALAH!";
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

    const resultTextStyle = [
        styles.resultText,
        result === "KALAH!" && { color: colors.error.red },
        result === "MENANG!" && { color: colors.primary.green },
        result === "SERI!" && { color: colors.secondary.yellow },
    
    ];

    return (
        <ImageBackground source={require('../assets/backgroundgamescreen.png')} style={styles.background}>
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.result}>
                        <Animated.Text
                            style={[resultTextStyle, { opacity: fadeAnimation }]}
                        >
                            {result}
                        </Animated.Text>
                    </View>
                    <View style={styles.screen}>
                        {!result ? (
                            <Text style={styles.readyText}> ? </Text>
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
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        width: '100%',
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
    },
    result: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    resultText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: 'white',
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
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
        color: 'white',
        padding: 20,
        borderWidth: 5,
        borderColor: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 15,
    },
});
