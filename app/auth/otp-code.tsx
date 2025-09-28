import { Image } from "expo-image";
import { router } from "expo-router";
import { OtpInput } from "react-native-otp-entry";
import { Button, H5, Paragraph, useTheme, View, YStack } from "tamagui";

export default function OTPCode() {
  const theme = useTheme();

  return (
    <YStack px="$4">
      <Image
        source={require("../../assets/images/logo.png")}
        alt="logo"
        contentFit="contain"
        style={{ width: 200, height: 80, alignSelf: "flex-start" }}
      />
      <H5 fontFamily="$mono">OTP Verification</H5>
      <Paragraph fontFamily="$mono">
        Please enter the OTP sent to your email address.
      </Paragraph>
      <View mt="$4" alignItems="center" justifyContent="center">
        <OtpInput
          numberOfDigits={6}
          onTextChange={(text) => console.log(text)}
          blurOnFilled={true}
          type="numeric"
          theme={{
            pinCodeContainerStyle: {
              borderRadius: 25,
              width: 50,
              height: 50,
              borderColor: theme.color10.val,
              borderWidth: 1,
              backgroundColor: theme.color2.val,
            },
            focusedPinCodeContainerStyle: {
              borderColor: theme.accent8.val,
              borderWidth: 2,
            },
            focusStickStyle: {
              backgroundColor: theme.accent8.val,
            },
            pinCodeTextStyle: {
              color: theme.color10.val,
              fontSize: 18,
              fontWeight: "600",
            },
          }}
        />
      </View>
      <Button
        onPress={() => router.push("/auth/reset-password")}
        color="white"
        bg="$accent1"
        mt="$6"
        fontFamily="$mono"
      >
        Continue
      </Button>
      <YStack items="center" justify="center">
        <Paragraph fontFamily="$mono" fontSize="$2" mt="$4" alignSelf="center">
          Haven{"'"}t got the email yet?{" "}
          <Button.Text
            onPress={() => router.push("/auth/sign-up")}
            color="$accent1"
            fontSize="$2"
            textDecorationLine="underline"
          >
            Resend Code
          </Button.Text>
        </Paragraph>
      </YStack>
    </YStack>
  );
}
