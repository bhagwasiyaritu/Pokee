import { StyleSheet } from 'react-native';
import COLORS from '../../constants/color/Colors';
import {
  FONT_SIZES,
  FONT_WEIGHTS,
} from '../../constants/typography/Typography';

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
