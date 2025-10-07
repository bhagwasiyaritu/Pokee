import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import COLORS from '../../constants/color/Colors';
import styles from './Header.styles';

type Props = {
  title: string;
  showIcon?: boolean;
  onPress?: () => void;
};

const Header = (props: Props) => {
  return (
    <View style={styles.headerWrapper}>
      {props.showIcon && (
        <TouchableOpacity onPress={props.onPress}>
          <FontAwesome6
            name={'arrow-left'}
            iconStyle={'solid'}
            color={COLORS.black}
            size={30}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

export default Header;
