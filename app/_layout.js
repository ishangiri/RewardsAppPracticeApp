import { Stack } from 'expo-router';

function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="(tabs)" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="User" 
        options={{ 
          headerBackTitleVisible: false,
          headerTintColor: 'red',
          headerTitle: 'User Settings' 
        }} 
      />
    </Stack>
  );
}

export default RootLayout;






