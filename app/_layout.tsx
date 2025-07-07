import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';

import './global.css';

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    // Helvetica
    'Helvetica-Bold': require('../assets/fonts/helvetica/Helvetica-Bold.ttf'),

    // Poppins
    'Poppins-Regular': require('../assets/fonts/poppins/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/poppins/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../assets/fonts/poppins/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/poppins/Poppins-SemiBold.ttf'),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}