import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import colors from "../themes/colors";
import { useNavigation } from "@react-navigation/native";

const OnBoardingScreen = () => {
  const navigation = useNavigation();

  const navigateToSignIn = () => {
    navigation.navigate("SignInScreen"); // Change from replace to navigate
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/onboarding.png")}
        style={styles.backgroundImage}
      />
      <Image
        source={require("../../assets/bagus.png")}
        style={styles.bagusImage}
      />
      <Text style={styles.header}>Selamat Datang!</Text>
      <TouchableOpacity style={styles.btn} onPress={navigateToSignIn}>
        <Text style={styles.btnTitle}>Mulai Main</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "110%",
    resizeMode: "cover",
  },
  bagusImage: {
    width: "80%",
    height: undefined,
    aspectRatio: 1,
    marginBottom: 15,
    marginTop: -40,
    resizeMode: "contain",
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 24,
    color: colors.textColors.white,
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
  btnTitle: {
    color: colors.textColors.white,
    fontWeight: "600",
  },
});

export default OnBoardingScreen;
