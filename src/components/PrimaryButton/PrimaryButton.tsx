import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './PrimaryButton.styles';

type Props = {
  title: string;
  onPress: () => void;
  disable?: boolean;
};

const PrimaryButton = (props: Props) => {
  return (
    <TouchableOpacity
      style={[styles.btnWrapper, { opacity: props.disable ? 0.7 : 1 }]}
      onPress={props.onPress}
      disabled={props.disable}
      activeOpacity={0.5}
    >
      <Text style={styles.btnText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
