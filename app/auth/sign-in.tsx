import { PasswordInput, SocialMediaButton } from 'components'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'expo-image'
import { TextInput } from 'components'
import { Button, H4, Paragraph, Separator, Text, XStack, YStack } from 'tamagui'
import { useRouter } from 'expo-router'

export default function SignIn() {
  const [firstName, setFirstName] = useState('')
  const router = useRouter()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <YStack flex={1} px="$4">
        <Image
          source={require('../../assets/images/logo.png')}
          alt="logo"
          contentFit="contain"
          style={{ width: 200, height: 80, alignSelf: 'center' }}
        />
        <YStack mt="$6" gap="$1">
          <H4 fontWeight="bold" fontFamily="$mono" text="center">
            WELCOME TO INSPIRABLOG
          </H4>
          <Paragraph fontFamily="$mono" fontSize="$4" text="center">
            Sign in to continue.
          </Paragraph>
        </YStack>
        <YStack mt="$8">
          <TextInput
            label="Email"
            value={firstName}
            onChangeText={setFirstName}
            placeholder="Email"
          />
          <PasswordInput
            label="Password"
            value={firstName}
            onChangeText={setFirstName}
            placeholder="Password"
          />
        </YStack>
        <Button.Text onPress={() => router.push('/auth/forgot-password')} mt="$3" color="$accent1" textDecorationLine='underline'>
          Forgot Password ?
        </Button.Text>
        <Button color="white" bg="$accent1" mt="$6" fontFamily="$mono">
          Sign In
        </Button>
        <XStack mt="$4" justify={"center"} items="center" gap="$2">
          <Separator />
          <Text>or</Text>
          <Separator />
        </XStack>
        <XStack
          width="100%"
          borderRadius={10}
          items={"center"}
          justify={"center"}
          cursor="pointer"
          gap={20}
          mt="$4">
          <SocialMediaButton
            provider="facebook"
            onPress={() => console.log("Facebook login")}
          />
          <SocialMediaButton
            provider="google"
            onPress={() => console.log("Google login")}
          />
          <SocialMediaButton
            provider="linkedin"
            onPress={() => console.log("LinkedIn login")}
          />
        </XStack>
        <Paragraph fontFamily="$mono" fontSize="$2" mt="$4" alignSelf="center">
          Don't have an account?{' '}
          <Button.Text onPress={() => router.push('/auth/sign-up')} color="$accent1" fontSize="$2" textDecorationLine='underline'>
            Sign Up
          </Button.Text>
        </Paragraph>
      </YStack>
    </SafeAreaView>
  )
}

