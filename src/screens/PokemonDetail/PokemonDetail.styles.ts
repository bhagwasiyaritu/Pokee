import { StyleSheet } from 'react-native';
import COLORS from '../../constants/color/Colors';
import { scale, verticalScale } from 'react-native-size-matters';
import {
  FONT_SIZES,
  FONT_WEIGHTS,
} from '../../constants/typography/Typography';
import { COMMON_ALIGNMENT } from '../../constants/calc/Calc';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: COMMON_ALIGNMENT.horizontalPadding,
    paddingVertical:COMMON_ALIGNMENT.verticalPadding,
  },
  image: {
    width: scale(200),
    height: verticalScale(200),
    marginBottom: 20,
  },
  name: {
    fontSize: FONT_SIZES['4xl'],
    fontWeight: FONT_WEIGHTS.bold,
    textTransform: 'capitalize',
  },
  infoRow: {
    flexDirection: 'row',
    marginTop: 10,
    width: '80%',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHTS.bold,
    textTransform: 'capitalize',
  },
  value: {
    fontSize: FONT_SIZES.md,
  },
  sectionTitle: {
    fontSize: FONT_SIZES['2xl'],
    fontWeight: FONT_WEIGHTS.bold,
    marginTop: 30,
    marginBottom: 10,
  },
});

export default styles;
