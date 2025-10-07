import { StyleSheet } from 'react-native';
import { COMMON_ALIGNMENT } from '../../constants/calc/Calc';
import { verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  footerLoader: {
    paddingVertical: COMMON_ALIGNMENT.verticalPadding,
  },
  listContainer: {
    paddingHorizontal: COMMON_ALIGNMENT.horizontalPadding,
    paddingBottom: verticalScale(80),
    paddingTop: COMMON_ALIGNMENT.verticalPadding,
  },
});

export default styles;
