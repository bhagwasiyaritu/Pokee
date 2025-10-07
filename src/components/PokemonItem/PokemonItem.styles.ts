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
    flex: 1,
  },
  typeImage: {
    width: verticalScale(30),
    height: verticalScale(30),
    marginRight: COMMON_ALIGNMENT.horizontalMargin / 2,
  },
  info: {
    marginHorizontal: COMMON_ALIGNMENT.horizontalMargin,
  },
  typesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
