import { PasswordInput, SocialMediaButton, TextInput } from 'components'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Checkbox, H4, Paragraph, Separator, Text, XStack, YStack } from 'tamagui'
// import { useUIStore } from '../../store/uiStore' // Available for future use

export default function SignUp() {
  // const { fontSize } = useUIStore() // Available for future use
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
        <H4 fontWeight="bold" fontFamily="$mono">
          GET STARTED NOW
        </H4>
        <Paragraph fontFamily="$mono" fontSize="$4">
          Let's create your account.
        </Paragraph>
        <YStack mt="$4">
          <TextInput
            label="Fullname"
            value={firstName}
            onChangeText={setFirstName}
            placeholder="Fullname"
          />
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
          <PasswordInput
            label="Confirm Password"
            value={firstName}
            onChangeText={setFirstName}
            placeholder="Confirm Password"
          />
        </YStack>
        <XStack items="center" mt="$3" gap="$3">
          <Checkbox size="$2" />
          <Text fontFamily="$mono" text="auto" fontSize="$1">
            Agree to <Button.Text color="$accent1" fontSize="$1" textDecorationLine='underline'>Terms & Conditions</Button.Text> and{' '}
            <Button.Text color="$accent1" fontSize="$1" lineBreakMode='clip' textDecorationLine='underline'>Privacy Policy</Button.Text>.
          </Text>
        </XStack>
        <Button color="white" bg="$accent1" mt="$6" fontFamily="$mono">
          Create Account
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
          Already have an account?{' '}
          <Button.Text onPress={() => router.push('/auth/sign-in')} color="$accent1" fontSize="$2" textDecorationLine='underline'>
            Sign In
          </Button.Text>
        </Paragraph>
      </YStack>
    </SafeAreaView>
  )
}
