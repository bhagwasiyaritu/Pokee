import { ActivityIndicator, View } from 'react-native';
import React from 'react';
import styles from './Loader.styles';
import COLORS from '../../constants/color/Colors';

const Loader = () => {
  return (
    <View style={styles.centered}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
};

export default Loader;
