import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const Actions = ({ play, canPlay, playerChoice }) => {
  return (
    <View style={styles.actionsContainer}>
      <TouchableOpacity
        disabled={!canPlay}
        style={[
          styles.actionButton,
          playerChoice === 1 && styles.selectedButton
        ]}
        onPress={() => play(1)}
      >
        <Image
          source={require('../assets/hand-rock.png')}
          style={styles.actionImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        disabled={!canPlay}
        style={[
          styles.actionButton,
          playerChoice === 2 && styles.selectedButton
        ]}
        onPress={() => play(2)}
      >
        <Image
          source={require('../assets/hand-paper.png')}
          style={styles.actionImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        disabled={!canPlay}
        style={[
          styles.actionButton,
          playerChoice === 3 && styles.selectedButton
        ]}
        onPress={() => play(3)}
      >
        <Image
          source={require('../assets/hand-scissors.png')}
          style={styles.actionImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
    alignItems: 'center',
  },
  actionButton: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008B8B',
    borderRadius: 20,
    marginTop:45,
  },
  selectedButton: {
    borderColor: '#ffcc00',
    borderWidth: 1,
  },
  actionImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginTop: 30.
  }
});

export default Actions;
