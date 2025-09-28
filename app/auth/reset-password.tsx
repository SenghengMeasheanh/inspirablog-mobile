import { PasswordInput } from "components";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Button, H5, Paragraph, YStack } from "tamagui";

export default function ResetPassword() {
  const router = useRouter();
  return (
    <YStack px="$4">
      <Image
        source={require("../../assets/images/logo.png")}
        alt="logo"
        contentFit="contain"
        style={{ width: 200, height: 80, alignSelf: "flex-start" }}
      />
      <H5 fontFamily="$mono">Set New Password</H5>
      <Paragraph fontFamily="$mono">Please enter your new password.</Paragraph>
      <PasswordInput
        label="New Password"
        placeholder="New Password"
        value=""
        onChangeText={() => {}}
      />
      <PasswordInput
        label="Confirm New Password"
        placeholder="Confirm New Password"
        value=""
        onChangeText={() => {}}
      />
      <Button
        onPress={() => router.push("/auth/sign-in")}
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
