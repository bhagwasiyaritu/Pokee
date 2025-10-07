import { StyleSheet } from 'react-native';
import COLORS from '../../constants/color/Colors';
import { FONT_SIZES, FONT_WEIGHTS } from '../../constants/typography/Typography';
import { COMMON_ALIGNMENT } from '../../constants/calc/Calc';

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: COMMON_ALIGNMENT.verticalMargin,
    paddingHorizontal: COMMON_ALIGNMENT.horizontalPadding,
  },
  headerTitle: {
    color: COLORS.black,
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHTS.medium,
    textAlign: 'center',
    flex: 1,
  },
});

export default styles;
