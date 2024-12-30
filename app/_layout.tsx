import { Stack } from "expo-router";

import { StatusBar } from "expo-status-bar";


export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
/*
// ESTO HARÁ QUE LA PANTALLA SPLASH DURE MÁS!!!

import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);
*/