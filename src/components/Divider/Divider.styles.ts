import { StyleSheet } from 'react-native';
import COLORS from '../../constants/color/Colors';
import { COMMON_ALIGNMENT } from '../../constants/calc/Calc';

const styles = StyleSheet.create({
  seperater: {
    height: 1,
    backgroundColor: COLORS.black,
    opacity: 0.2,
    marginVertical: COMMON_ALIGNMENT.verticalMargin,
  },
});

export default styles;
