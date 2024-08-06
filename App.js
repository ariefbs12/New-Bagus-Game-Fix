import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RockPaper from './components/RockPaper';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <RockPaper />
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});