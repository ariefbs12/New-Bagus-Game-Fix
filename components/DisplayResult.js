import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const images = [
    require('../assets/hand-rock.png'),
    require('../assets/hand-paper.png'),
    require('../assets/hand-scissors.png'),
];

const DisplayResult = ({ userChoice, computerChoice }) => {
    return (
        <View style={styles.container}>
            {/* Computer Section */}
            <View style={styles.playerSection}>
                <Text style={styles.playerName}>Komputer</Text>
                <Image 
                    source={images[computerChoice - 1]}
                    style={styles.icon}
                />
            </View>

            {/* You Section */}
            <View style={styles.playerSection}>
                <Image 
                    source={images[userChoice - 1]}
                    style={styles.icon}
                />
                <Text style={styles.playerName}>Kamu</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 45,
    },
    playerSection: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,  // Adjust to bring the sections closer
        marginTop: 40,
    },
    playerName: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: -70,
    },
    icon: {
        width: 200,  // Adjust size as needed
        height: 200, // Adjust size as needed
        resizeMode: 'contain',
    },
});

export default DisplayResult;
