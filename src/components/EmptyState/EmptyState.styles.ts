import { StyleSheet } from 'react-native';
import {
  FONT_SIZES,
  FONT_WEIGHTS,
} from '../../constants/typography/Typography';
import COLORS from '../../constants/color/Colors';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: COLORS.red,
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHTS.bold,
  },
});

export default styles;
