import { UserProvider } from '@/context/UserContext';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts
} from '@expo-google-fonts/inter';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    InterRegular: Inter_400Regular,
    InterMedium: Inter_500Medium,
    InterSemiBold: Inter_600SemiBold,
    InterBold: Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <View style={{ flex: 1, backgroundColor: 'white' }} />;
  }

  return (
    <UserProvider>

      <StatusBar style="dark" />
      <Stack screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'white' },
      }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="onboarding/permissions" />
        <Stack.Screen name="auth/login" />
        <Stack.Screen name="auth/verify" />
        <Stack.Screen name="auth/user-details" />
        <Stack.Screen name="(app)/dashboard" />
      </Stack>
    </UserProvider>);
}