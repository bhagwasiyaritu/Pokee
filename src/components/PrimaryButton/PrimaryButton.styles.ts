import { StyleSheet } from 'react-native';
import COLORS from '../../constants/color/Colors';
import { BUTTON_ALIGNMENT, COMMON_ALIGNMENT } from '../../constants/calc/Calc';
import { FONT_SIZES, FONT_WEIGHTS } from '../../constants/typography/Typography';

const styles = StyleSheet.create({
  btnWrapper: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: BUTTON_ALIGNMENT.horizontalPadding,
    paddingVertical: BUTTON_ALIGNMENT.verticalPadding,
    borderRadius: BUTTON_ALIGNMENT.radius,
    marginVertical: COMMON_ALIGNMENT.verticalMargin,
  },
  btnText: {
    color: COLORS.white,
    fontWeight: FONT_WEIGHTS.bold,
    fontSize: FONT_SIZES.sm,
    textAlign: 'center',
  },
});

export default styles;
