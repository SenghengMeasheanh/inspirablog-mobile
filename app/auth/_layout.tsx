import { Header } from "components/Header";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => <Header type="secondary" />,
      }}
    >
      <Stack.Screen
        name="sign-in"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="sign-up"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="otp-code" />
      <Stack.Screen name="reset-password" />
      <Stack.Screen name="forgot-password" />
    </Stack>
  );
}
