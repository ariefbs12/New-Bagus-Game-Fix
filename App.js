import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { onAuthStateChanged } from "firebase/auth";

import colors from "./src/themes/colors";
import SplashScreen from "./src/screens/SplashScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import MainScreen from "./src/screens/MainScreen";
import { auth } from "./firebaseConfig"; // Import auth

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="small" color={colors.primary.blue} />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={{ colors: { background: colors.textColors.white } }}
      >
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: colors.textColors.white },
          }}
        >
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{
              headerShown: false,
            }}
          />
          {user ? (
            <Stack.Screen
              name="MainScreen"
              component={MainScreen}
              options={{
                headerShown: false,
              }}
            />
          ) : (
            <Stack.Screen
              name="SignInScreen"
              component={SignInScreen}
              options={{
                headerTitle: "Sign In",
              }}
            />
          )}
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={({ navigation }) => ({
              headerTitle: "Sign Up",
              headerLeft: () => (
                <Ionicons
                  name="arrow-back-circle"
                  size={24}
                  color={colors.primary.blue}
                  onPress={() => navigation.goBack()}
                />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
