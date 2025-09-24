import { useRouter } from 'expo-router'
import { Text, View } from 'tamagui'

export default function TabTwoScreen() {
  const router = useRouter()
  return (
    <View flex={1} items="center" justify="center" bg="$background">
      <Text onPress={() => router.push('/auth/sign-up')} fontSize={20} color="$blue10">
        Tab Two
      </Text>
    </View>
  )
}
