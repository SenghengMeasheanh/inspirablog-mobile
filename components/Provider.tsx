import { ToastProvider, ToastViewport } from '@tamagui/toast'
import { useColorScheme } from 'react-native'
import { TamaguiProvider, type TamaguiProviderProps, View } from 'tamagui'
import { QueryProvider } from '../providers/QueryProvider'
import { config } from '../tamagui.config'
import { CurrentToast } from './CurrentToast'

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  const colorScheme = useColorScheme()

  return (
    <QueryProvider>
      <TamaguiProvider
        config={config}
        defaultTheme={colorScheme === 'dark' ? 'dark' : 'light'}
        {...rest}
      >
        <View flex={1} bg="$background">
          <ToastProvider
            swipeDirection="horizontal"
            duration={6000}
            native={
              [
                // uncomment the next line to do native toasts on mobile. NOTE: it'll require you making a dev build and won't work with Expo Go
                // 'mobile'
              ]
            }
          >
            {children}
            <CurrentToast />
            <ToastViewport top="$8" left={0} right={0} />
          </ToastProvider>
        </View>
      </TamaguiProvider>
    </QueryProvider>
  )
}
