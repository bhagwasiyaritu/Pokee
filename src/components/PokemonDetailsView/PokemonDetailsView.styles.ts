import { StyleSheet } from 'react-native';
import {
  FONT_SIZES,
  FONT_WEIGHTS,
} from '../../constants/typography/Typography';
import { COMMON_ALIGNMENT } from '../../constants/calc/Calc';
import { scale, verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    paddingHorizontal: COMMON_ALIGNMENT.horizontalPadding,
    paddingVertical: COMMON_ALIGNMENT.verticalPadding,
  },
  image: {
    width: scale(200),
    height: verticalScale(200),
    marginBottom: COMMON_ALIGNMENT.verticalMargin / 2,
  },
  name: {
    fontSize: FONT_SIZES['4xl'],
    fontWeight: FONT_WEIGHTS.bold,
    textTransform: 'capitalize',
  },
  infoRow: {
    flexDirection: 'row',
    marginTop: COMMON_ALIGNMENT.verticalMargin / 2,
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
    marginTop: COMMON_ALIGNMENT.verticalMargin,
    marginBottom: COMMON_ALIGNMENT.verticalMargin / 2,
  },
  typesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  typeImage: {
    width: verticalScale(30),
    height: verticalScale(30),
    marginLeft: COMMON_ALIGNMENT.horizontalMargin / 2,
  },
});

export default styles;
