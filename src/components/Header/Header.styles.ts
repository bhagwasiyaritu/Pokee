import { StyleSheet } from 'react-native';
import COLORS from '../../constants/color/Colors';
import {
  FONT_SIZES,
  FONT_WEIGHTS,
} from '../../constants/typography/Typography';
import { COMMON_ALIGNMENT } from '../../constants/calc/Calc';
import { verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: COMMON_ALIGNMENT.horizontalPadding,
    paddingVertical: COMMON_ALIGNMENT.verticalPadding,
    backgroundColor: COLORS.primary,
    height: verticalScale(40),
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHTS.medium,
    textAlign: 'center',
    flex: 1,
  },
});

export default styles;
