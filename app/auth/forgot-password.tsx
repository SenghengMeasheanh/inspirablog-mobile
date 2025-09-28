import { TextInput } from "components";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Button, H5, Paragraph, YStack } from "tamagui";

export default function ForgotPassword() {
  const router = useRouter();
  return (
    <YStack px="$4">
      <Image
        source={require("../../assets/images/logo.png")}
        alt="logo"
        contentFit="contain"
        style={{ width: 200, height: 80, alignSelf: "flex-start" }}
      />
      <H5 fontFamily="$mono">Forgot Password</H5>
      <Paragraph fontFamily="$mono">
        Please enter your email address to reset your password.
      </Paragraph>
      <TextInput
        label="Email"
        placeholder="Email"
        value=""
        onChangeText={() => {}}
      />
      <Button
        onPress={() => router.push("/auth/otp-code")}
        color="white"
        bg="$accent1"
        mt="$6"
        fontFamily="$mono"
      >
        Continue
      </Button>
    </YStack>
  );
}
