import { StyleSheet } from 'react-native';
import COLORS from '../../constants/color/Colors';
import {
  FONT_SIZES,
  FONT_WEIGHTS,
} from '../../constants/typography/Typography';
import { COMMON_ALIGNMENT } from '../../constants/calc/Calc';
import { verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  itemWrapper: {
    marginHorizontal: COMMON_ALIGNMENT.horizontalMargin,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: verticalScale(50),
    height: verticalScale(50),
    borderRadius: COMMON_ALIGNMENT.radius,
  },
  pokemonName: {
    color: COLORS.black,
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHTS.medium,
    marginHorizontal: COMMON_ALIGNMENT.horizontalMargin,
    flex: 1,
  },
});

export default styles;
