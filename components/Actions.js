import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

const Actions = ({ play, canPlay, playerChoice }) => {
  return (
    <View style={styles.actions}>
      <TouchableOpacity
        disabled={!canPlay}
        style={[
          styles.actionButton,
          playerChoice === 1 && styles.selectedButton
        ]}
        onPress={() => play(1)}
      >
        <FontAwesome5 name={'hand-rock'} size={32} color='#6a5300' />
      </TouchableOpacity>

      <TouchableOpacity
        disabled={!canPlay}
        style={[
          styles.actionButton,
          playerChoice === 2 && styles.selectedButton
        ]}
        onPress={() => play(2)}
      >
        <FontAwesome5 name={'hand-paper'} size={32} color='#6a5300' />
      </TouchableOpacity>

      <TouchableOpacity
        disabled={!canPlay}
        style={[
          styles.actionButton,
          playerChoice === 3 && styles.selectedButton
        ]}
        onPress={() => play(3)}
      >
        <FontAwesome5 name={'hand-scissors'} size={32} color='#6a5300' style={{ transform: [{ rotate: '67deg' }] }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  actions: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between', // Use space-between instead of space-around
    alignItems: 'center',
    width: '100%', // Ensure the container takes full width
    paddingHorizontal: 20, // Add padding to ensure spacing from screen edges
  },
  actionButton: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9d835',
    borderRadius: 32,
  },
  selectedButton: {
    borderColor: '#ffcc00',
    borderWidth: 2,
  }
});

export default Actions;
