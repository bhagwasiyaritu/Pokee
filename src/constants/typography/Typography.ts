import { moderateScale } from "react-native-size-matters";

export const FONT_SIZES = {
  xs: moderateScale(12),   // captions, labels
  sm: moderateScale(14),   // small text, secondary info
  md: moderateScale(16),   // body text
  lg: moderateScale(18),   // subheadings
  xl: moderateScale(20),   // small heading
  '2xl': moderateScale(24), // medium heading
  '3xl': moderateScale(28), // large heading
  '4xl': moderateScale(32), // extra large
} as const

export const FONT_WEIGHTS = {
  thin: '100',
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '900',
} as const;