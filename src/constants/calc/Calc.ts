import { scale, moderateScale, verticalScale } from "react-native-size-matters";

export const COMMON_ALIGNMENT = {
    horizontalPadding: scale(16),
    verticalPadding: scale(12),
    verticalMargin: verticalScale(12),
    horizontalMargin: verticalScale(16),
    radius: moderateScale(16)
} as const

export const TAG_ALIGNMENT = {
    horizontalPadding: scale(8),
    verticalPadding: verticalScale(4),
    radius: moderateScale(8)
} as const

export const BUTTON_ALIGNMENT = {
    horizontalPadding: scale(16),
    verticalPadding: verticalScale(8),
    radius: moderateScale(8)
} as const

export const PROFILE_ITEM_HEIGHT = 55 as const;