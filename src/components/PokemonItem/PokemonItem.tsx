import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import styles from './PokemonItem.styles';

type Props = {
  id: number;
  name: string;
  image: string;
  onPress: () => void;
};

const PokemonItem = (props: Props) => {
  return (
    <TouchableOpacity
      testID="pokemon-item"
      activeOpacity={0.5}
      key={`${props.id} ${props.name}`}
      onPress={props.onPress}
      style={styles.itemWrapper}
    >
      <FastImage
        testID="character-image"
        style={styles.image}
        source={{
          uri: props.image,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={styles.pokemonName}>
        {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
      </Text>
    </TouchableOpacity>
  );
};

export default React.memo(PokemonItem);
