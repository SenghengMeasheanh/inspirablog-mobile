import { Stack } from 'expo-router'
import { CustomHeader } from 'components'
import { Header } from 'components/Header'

export default function AuthLayout() {
  return (
    <Stack screenOptions={{
      header: () => <Header type='secondary' />,
    }}>
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
      <Stack.Screen
        name="otp-code"
      />
      <Stack.Screen
        name="reset-password"
      />
      <Stack.Screen
        name="forgot-password"
      />

    </Stack>
  )
}
