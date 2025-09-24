import { ChevronLeft } from '@tamagui/lucide-icons'
import { router } from 'expo-router'
import { Pressable } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { H5, XStack, YStack } from 'tamagui'

interface CustomHeaderProps {
    title?: string
    showBackButton?: boolean
    onBackPress?: () => void
}

export function CustomHeader({
    title,
    showBackButton = true,
    onBackPress,
}: CustomHeaderProps) {
    const insets = useSafeAreaInsets()

    const handleBackPress = () => {
        if (onBackPress) {
            onBackPress()
        } else if (router.canGoBack()) {
            router.back()
        }
    }

    return (
        <YStack backgroundColor="$background" paddingTop={insets.top}>
            <XStack
                height={56}
                alignItems="center"
                justifyContent="space-between"
                paddingHorizontal="$4"
                borderBottomWidth={1}
                borderBottomColor="$borderColor"
            >
                {/* Left side - Back button */}
                {showBackButton ? (
                    <Pressable onPress={handleBackPress}>
                        <XStack
                            alignItems="center"
                            justifyContent="center"
                            width={40}
                            height={40}
                            borderRadius={20}
                            pressStyle={{
                                backgroundColor: '$backgroundPress',
                                scale: 0.95,
                            }}
                        >
                            <ChevronLeft size={20} color="$color" />
                        </XStack>
                    </Pressable>
                ) : (
                    <XStack width={40} />
                )}

                {/* Center - Title */}
                {title && (
                    <H5 color="$color" fontWeight="600" textAlign="center" flex={1}>
                        {title}
                    </H5>
                )}

                {/* Right side - Placeholder for future actions */}
                <XStack width={40} />
            </XStack>
        </YStack>
    )
}