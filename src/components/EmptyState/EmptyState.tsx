import { Text, View } from 'react-native';
import React from 'react';
import styles from './EmptyState.styles';

type Props = {
  message: string;
};

const EmptyState = (props: Props) => {
  return (
    <View style={styles.center}>
      <Text style={styles.errorText}>{props.message}</Text>
    </View>
  );
};

export default EmptyState;
