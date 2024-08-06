import React, {useState, useRef} from "react"
import {StyleSheet, SafeAreaView, Text, View, Animated, useAnimatedValue} from 'react-native';
import Constants from 'expo-constants'
import DisplayResult from './DisplayResult';
import Actions from './Actions';
import Header from './Header';

export default function RockPaper() {
    const [userChoice, setUserChoice] = useState(0);
    const [computerChoice, setComputerChoice] = useState(0);
    const [result, setResult] = useState("");
    const [canPlay, setPlay] = useState(true);

    // For Animation
    const fadeAnimation = useRef(new useAnimatedValue(1)).current;

    function play(choice) {
        const randomComputerChoice = Math.floor(Math.random()*3);
        let result = "";

        if(playerChoice === computerChoice){
            result = "IT'S A TIE!";
        }
        else if (choice === 0){
            result = (randomComputerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";}
        else if (choice === 1){
            result = (randomComputerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";}
        else if (choice === 2){
            result = (randomComputerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";}
        
            setUserChoice(choice);
            setComputerChoice(randomComputerChoice);

            // wait animation
            setTimeout(() => {
                setResult(result);
            }, 300);

            // Animation hide old result 
            Animated.sequence([
                Animated.timing(fadeAnimation, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
            Animated.timing(fadeAnimation, {
                toValue:1,
                duration: 300,
                useNativeDriver: true,
                }),
            ]).start();

            // Disable action when animation running 
            setPlay(false);
            setTimeout(() => {
                setPlay(true);
            }, 600);
        }

        // return the view 
        return(
            <SafeAreaView style={StyleSheet.container}>
                <Header/>
                <View style = {styles.content}>
                    <View style = {styles.result}>
                        <Animated.Text
                            style = {[styles.resultText , { opacity: fadeAnimation }]}
                        >
                            {result}
                        </Animated.Text>
                    </View>
                    <View style = { styles.screen}>
                        {!result ? (
                            <Text style = {styles.readyText}> Ayo Bermain</Text>
                        ) : (
                            <DisplayResult
                                userChoice = {userChoice}
                                computerChoice = {computerChoice}
                            />
                        )} 
                    </View>
                    <Actions play = {play} canPlay={canPlay}/>
                </View>
            </SafeAreaView>
        )
    }

const styles = StyleSheet.create({
    container: {
        flex:1, 
        paddingTop: Constants.statusBarHeight
    },
    content:{
        flex: 1,
        marginBottom: 5,
        backgroundColor: '#e8eaed'
    },
    result: {
        height: 100,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    resultText : {
        fontSize: 48,
        fontWeight: 'bold',
    },
    screen: {
        flex: 1,
        flexDirectory: 'row',
    },
    readyText: {
        marginTop: -48,
        alignSelf: 'center',
        textAlign: 'center',
        width: '100%',
        fontSize: -48, 
        fontWeight: 'bold',
    }
});