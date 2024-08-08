import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { signOut } from 'firebase/auth';
import colors from '../themes/colors';
import { useNavigation } from '@react-navigation/native';
import RockPaper from '../../components/RockPaper';
import { auth } from '../../firebaseConfig';

const MainScreen = () => {
  const navigation = useNavigation();

  const signOutHandler = async () => {
    try {
      await signOut(auth);
      navigation.replace('SignInScreen');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <RockPaper />
      <TouchableOpacity style={styles.btn} onPress={signOutHandler}>
        <Text style={styles.btnTitle}>Keluar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#Fbbe57', // Optional: Background color for the main screen
  },
  btn: {
   backgroundColor: '#008B8B',
    height: 56,
    width: 300,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  btnTitle: {
    color: colors.textColors.white,
    fontWeight: '600',
  },
});

export default MainScreen;
