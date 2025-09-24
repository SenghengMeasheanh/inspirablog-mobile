import { Eye, EyeOff } from "@tamagui/lucide-icons"
import { useState } from "react"
import type { TextInputProps as RNTextInputProps } from "react-native"
import { Input, Label, Text, View, XStack, YStack } from "tamagui"

interface PasswordInputProps
    extends Omit<RNTextInputProps, "value" | "onChangeText"> {
    label: string
    value: string
    onChangeText: (text: string) => void
    placeholder?: string
    withError?: boolean
    error?: string
}

export default function PasswordInput(props: PasswordInputProps) {
    const {
        label = "Password",
        value,
        onChangeText,
        placeholder = "Enter password",
        withError,
        error,
        ...rest
    } = props
    const [showPassword, setShowPassword] = useState(false)

    return (
        <YStack>
            <Label color={error ? "$red10" : "$color10"}>
                {label}
            </Label>
            <XStack
                items={"center"}
                borderWidth={1}
                borderColor={error ? "$red10" : "$borderColor"}
                borderRadius={10}
                bg="$color2"
                >
                <Input
                    flex={1}
                    onChangeText={onChangeText}
                    autoCapitalize="none"
                    secureTextEntry={!showPassword}
                    placeholder={placeholder}
                    borderWidth={0}
                    focusStyle={{
                        borderColor: "$accent8",
                    }}
                    value={value}
                    color="$color10"
                    {...rest}
                />

                <View
                    paddingEnd="$2"
                    onPress={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (
                        <EyeOff size={20} color="$color10"/>
                    ) : (
                        <Eye size={20} color="$color10"/>
                    )}
                </View>
            </XStack>
            {error && withError && (
                <Text color="$red10" fontSize="$2" mt={5}>
                    {error}
                </Text>
            )}
        </YStack>
    )
}
