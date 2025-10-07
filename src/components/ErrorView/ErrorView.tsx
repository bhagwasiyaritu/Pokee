import { Text, View } from 'react-native';
import React from 'react';
import styles from './ErrorView.styles';

type Props = {
  message: string;
};

const ErrorView = (props: Props) => {
  return (
    <View style={styles.center}>
      <Text style={styles.errorText}>Error: {props?.message}</Text>
    </View>
  );
};

export default ErrorView;
