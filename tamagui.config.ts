import { defaultConfig } from '@tamagui/config/v4'
import { createFont, createTamagui } from 'tamagui'
import { themes } from './styles/theme'

const monoFont = createFont({
  family: 'RobotoMono_400Regular',
  size: defaultConfig.fonts.body.size,
  lineHeight: defaultConfig.fonts.body.lineHeight,
  weight: {
    1: '400',
    2: '500',
    3: '700',
  },
  letterSpacing: defaultConfig.fonts.body.letterSpacing,
  face: {
    400: { normal: 'RobotoMono_400Regular' },
    500: { normal: 'RobotoMono_500Medium' },
    700: { normal: 'RobotoMono_700Bold' },
  },
})

export const config = createTamagui({
  ...defaultConfig,
  themes: {
    ...defaultConfig.themes,
    ...themes
  },
  fonts: {
    ...defaultConfig.fonts,
    mono: monoFont,
  },
  settings: { ...defaultConfig.settings, onlyAllowShorthands: false }
})

export default config

export type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf { }
}
