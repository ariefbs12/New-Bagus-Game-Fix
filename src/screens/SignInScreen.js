import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import colors from "../themes/colors";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig"; // Import auth from firebaseConfig

const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.reset({
        index: 0,
        routes: [{ name: "MainScreen" }], // Updated to match the screen name in App.js
      });
    } catch (error) {
      console.error("Sign-in Error: ", error.message);
    }
  };

  const signUp = () => {
    navigation.navigate("SignUpScreen"); // Updated to match the screen name in App.js
  };

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require("../../assets/background.png")}
        style={styles.backgroundImage}
      />

      {/* Content Stack (Centered Vertically) */}
      <View style={styles.contentContainer}>
        {/* Centered Top Image (Optional) */}
        <Image
          source={require("../../assets/console.png")}
          style={styles.consoleImage}
        />
        {/* Centered Top Image (Optional) */}
        <Image
          source={require("../../assets/bsilogo.png")}
          style={styles.bsilogoImage}
        />

        {/* Header and Input Fields */}
        <Text style={styles.header}>Halo!</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Kata Sandi"
          secureTextEntry
          style={styles.input}
        />
        {/* Buttons */}
        <TouchableOpacity style={styles.btn} onPress={signIn}>
          <Text style={styles.btnTitle}>Masuk</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.transparentBtn} onPress={signUp}>
          <Text style={styles.transparentBtnTitle}>Belum punya akun? 
          <Text style={styles.boldText}> Daftar</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the container fill the entire screen
  },
  backgroundImage: {
    position: "absolute", // Overlays other elements
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Adjust as needed (e.g., "contain", "stretch")
  },
  contentContainer: {
    flex: 1, // Fills the container (excluding the background image)
    justifyContent: "center", // Vertically centers the content
    alignItems: "center", // Horizontally centers the content
  },
  consoleImage: {
    width: 200, // Adjust width as needed
    height: 200, // Adjust height as needed
    marginBottom: 0, // Add some margin below (optional)
  },
  bsilogoImage: {
    width: 100, // Adjust width as needed
    height: 100, // Adjust height as needed
    marginBottom: 0, // Add some margin below (optional)
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 24,
    color: colors.textColors.white,
  },
  input: {
    height: 56,
    width: "80%",
    marginBottom: 32,
    paddingHorizontal: 16,
    paddingVertical: 18,
    backgroundColor: colors.textColors.white,
    borderRadius: 14,
    fontWeight: "600",
    color: colors.textColors.black,
  },
  btn: {
    backgroundColor: colors.secondary.yellow,
    height: 56,
    width: "80%",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  transparentBtn: {
    borderWidth: 0,
    width: "80%",
    height: 56,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  btnTitle: {
    color: colors.textColors.white,
    fontWeight: "600",
  },
  transparentBtnTitle: {
    color: colors.textColors.white,
    fontWeight: "600",
  },
  boldText: {
    color: colors.textColors.white,
    fontWeight: "bold",
  },
});

export default SignInScreen;
