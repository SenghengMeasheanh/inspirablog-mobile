import type { TextInputProps as RNTextInputProps } from 'react-native'
import { Input, Label, Text, YStack } from 'tamagui'

interface TextInputProps extends Omit<RNTextInputProps, 'value' | 'onChangeText'> {
  label: string
  value: string
  onChangeText: (text: string) => void
  placeholder?: string
  error?: string
  withError?: boolean
}

export default function TextInput({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  withError,
  ...props
}: TextInputProps) {
  return (
    <YStack>
      <Label color={error ? '$red10' : '$color10'}>
        {label}
      </Label>
      <Input
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        color="$color10"
        borderColor={error ? '$red9' : '$borderColor'}
        focusStyle={{
          borderColor: '$accent8',
        }}
        caretColor="$accent8"
        {...props}
      />
      {error && withError && (
        <Text color="$red10" fontSize="$2" mt={5}>
          {error}
        </Text>
      )}
    </YStack>
  )
}
