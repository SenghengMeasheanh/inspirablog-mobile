import { ChevronLeft } from "@tamagui/lucide-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, XStack, YStack } from "tamagui";

interface Props {
  type?: "primary" | "secondary";
  centerTitle?: boolean;
  title?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
}

export function Header({
  title,
  onBackPress,
  type = "primary",
  centerTitle = false,
}: Props) {
  const insets = useSafeAreaInsets();

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else if (router.canGoBack()) {
      router.back();
    }
  };

  return (
    <YStack paddingTop={insets.top}>
      <XStack
        height={56}
        alignItems="center"
        justifyContent="space-between"
        px="$2"
      >
        {type === "primary" ? (
          <Image
            source={require("../assets/images/logo.png")}
            style={{ width: 140, height: 40, resizeMode: "contain" }}
          />
        ) : (
          <XStack width="100%" items="center" position="relative">
            {!centerTitle && (
              <ChevronLeft
                size={30}
                color="$accent6"
                onPress={handleBackPress}
              />
            )}
            <Text
              ml={centerTitle ? "$0" : "$6"}
              fontSize={22}
              fontWeight="bold"
              textAlign={centerTitle ? "center" : "left"}
              flex={centerTitle ? 1 : undefined}
            >
              {title}
            </Text>
            {centerTitle && (
              <ChevronLeft
                size={30}
                color="$accent6"
                onPress={handleBackPress}
                position="absolute"
                left={0}
              />
            )}
          </XStack>
        )}
      </XStack>
    </YStack>
  );
}
