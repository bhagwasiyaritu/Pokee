import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import styles from './PokemonItem.styles';
import { PokemonType } from '../../types/types';

type Props = {
  id: number;
  name: string;
  imageBaseUrl: string;
  onPress: () => void;
  types: PokemonType[];
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
        testID="pokemon-image"
        style={styles.image}
        source={{
          uri: `${props.imageBaseUrl}${props.id}.png`,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={styles.info}>
        <Text testID="pokemon-name" style={styles.pokemonName}>
          {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
        </Text>

        {props.types && props.types.length > 0 && (
          <View style={styles.typesContainer}>
            {props.types.map(type => {
              return (
                <FastImage
                  key={`${props.id}-type-${type.type_id}`}
                  testID="pokemon-type-image"
                  style={styles.typeImage}
                  source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/${type.type_id}.png`,
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.contain}
                />
              );
            })}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(PokemonItem);
