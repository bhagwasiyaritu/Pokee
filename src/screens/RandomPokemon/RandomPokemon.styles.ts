import { StyleSheet } from 'react-native';
import COLORS from '../../constants/color/Colors';
import { COMMON_ALIGNMENT } from '../../constants/calc/Calc';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: COLORS.red,
  },
  buttonContainer: {
    padding: COMMON_ALIGNMENT.verticalPadding,
    borderTopWidth: 1,
    borderTopColor: COLORS.grey,
    backgroundColor: COLORS.white,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.overlayLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
