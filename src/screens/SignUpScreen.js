import { useState } from "react";
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
import { auth } from "../../firebaseConfig"; // Import auth directly from firebaseConfig
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password); // Use auth directly
      navigation.reset({
        index: 0,
        routes: [{ name: "MainScreen" }],
      });
    } catch (error) {
      console.error(error);
    }
  };

  const signIn = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/background.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.contentContainer}>
        <Image
          source={require("../../assets/group.png")}
          style={styles.groupImage}
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="masukan email"
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="masukan password"
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="masukan ulang password"
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity style={styles.btn} onPress={signUp}>
          <Text style={styles.btnTitle}>Daftar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.transparentBtn} onPress={signIn}>
          <Text style={styles.transparentBtnTitle}>
            Sudah Punya Akun?{" "}
            <Text style={styles.boldText}> Masuk</Text>
          </Text>
        </TouchableOpacity>
      </View>
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
    height: "100%",
    resizeMode: "cover",
  },
  contentContainer: {
    width: "100%",
    alignItems: "center",
  },
  groupImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  input: {
    height: 56,
    width: "80%",
    marginBottom: 20,
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
  btnTitle: {
    color: colors.textColors.white,
    fontWeight: "600",
  },
  transparentBtn: {
    borderWidth: 0,
    width: "80%",
    height: 56,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  transparentBtnTitle: {
    color: colors.textColors.white,
    fontWeight: "600",
  },
  boldText: {
    fontWeight: "700",
  },
});

export default SignUpScreen;
