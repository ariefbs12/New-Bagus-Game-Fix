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


    
   // Untuk animasi
   const fadeAnimation = useRef(new Animated.Value(1)).current;

    // 3 pilihan
    //1 = ROCK
    //2 = PAPER
    //3 = GUNTING

        
        function play(choice) {
            const randomComputerChoice = Math.floor(Math.random()*3)+1;
            let result = "";


        if(choice === randomComputerChoice){
            result = "Imbang!";}
        else if (choice === 1 && randomComputerChoice === 3 ) {result = "Menang!";}
        else if (choice === 2 && randomComputerChoice === 1 ) {result = "Menang!";}
        else if (choice === 3 && randomComputerChoice === 2 ) {result = "Menang!";}
        
        else { result = "Kalah!";}


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
            <SafeAreaView style={styles.container}>
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
        );
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
        flexDirection: 'row',
    },
    readyText: {
        marginTop: -48,
        alignSelf: 'center',
        textAlign: 'center',
        width: '100%',
        fontSize: 48, 
        fontWeight: 'bold',
    }
});