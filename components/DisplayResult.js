import {View,Text, TextComponent, StyleSheet} from 'react-native'
import {FontAwesome5} from '@expo/vector-icons'
import React from 'react'

const icons = ['hand-rock','hand-paper','hand-scissors']
const DisplayResult = ({userChoice, computerChoice}) => {
    return (
        <>
        <View style = {styles.column}>
            <FontAwesome5 
                name={ICONS[userChoice -1]}
                size={64}
                color = '#f9d835'
                solid
                style = {userChoice === 3 ? styles.scissorsLeftIcon : styles.leftIcon}
                />
                    <Text style={styles.playerName}> You </Text>
        </View>

        <View style={styles.column}>
            <FontAwesome5
                name = {ICONS[computerChoice -1]}
                size={64}
                color="#f9d835"
                solid
                style={computerChoice === 3 ? styles.scissorsRicghtIcon : styles.rightIcon}
            />
            <Text style = {StyleSheet.playerName}> Computer </Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    column: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    playerName: {
        color: '#373737',
        fontSize:16,
        marginTop:16,
    },
    leftIcon: {
        transform: [{rotateZ: '80deg'}],
    },
    scissorsLeftIcon: {
        transform: [{rotateZ: '180deg'}, {rotateX: '180deg'}],
    },
    rifghtIcon: {
        transform: [
            {rotateZ: '180deg'},
            {rotateY: '180deg'},
            {rotateX: '180deg'},
        ],
    },
});

export default DisplayResult;
