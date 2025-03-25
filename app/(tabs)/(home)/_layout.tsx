import React from 'react';
import { StatusBar } from 'react-native';
import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';

export default function RootLayout() {
  return (
    <PaperProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="generate" options={{ headerShown: false }} />
      </Stack>
      <StatusBar barStyle="default" />
    </PaperProvider>
  );
}
