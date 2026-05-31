import '@/global.css';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(auth)" options={{ presentation: 'modal' }} />
      <Stack.Screen name="onboarding" />
    </Stack>
  );
}
