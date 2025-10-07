import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import { PokemonDetailLabel } from '../../constants/labels/Labels';
import FastImage from 'react-native-fast-image';
import { PokemonDetail, PokemonType } from '../../types/types';
import styles from './PokemonDetailsView.styles';

type Props = {
  details: PokemonDetail;
  imageBaseUrl: string;
};

const PokemonDetailView = (props: Props) => {
  return (
    <ScrollView
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      bounces={false}
    >
      <FastImage
        style={styles.image}
        source={{
          uri: `${props.imageBaseUrl}${props.details.id}.png`,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={styles.name}>
        {props.details.name.charAt(0).toUpperCase() +
          props.details.name.slice(1)}
      </Text>

      {props.details.pokemontypes && props.details.pokemontypes.length > 0 && (
        <View style={styles.infoRow}>
          <Text style={styles.label}>{PokemonDetailLabel.type}</Text>
          <View style={styles.typesContainer}>
            {props.details.pokemontypes.map((type: PokemonType) => {
              return (
                <FastImage
                  key={`type-${type.type_id}`}
                  testID="character-image"
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
        </View>
      )}

      <View style={styles.infoRow}>
        <Text style={styles.label}>{PokemonDetailLabel.height}</Text>
        <Text style={styles.value}>
          {props.details.height / 10}
          {PokemonDetailLabel.m}
        </Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.label}>{PokemonDetailLabel.weight}</Text>
        <Text style={styles.value}>
          {props.details.weight / 10}
          {PokemonDetailLabel.kg}
        </Text>
      </View>

      <Text style={styles.sectionTitle}>{PokemonDetailLabel.baseStats}</Text>
      {props.details.pokemonstats.map(
        (
          { base_stat, stat }: { base_stat: number; stat: { name: string } },
          index: number,
        ) => (
          <View key={`${stat.name}+${index}`} style={styles.infoRow}>
            <Text style={styles.label}>{stat.name.replace('-', ' ')}:</Text>
            <Text style={styles.value}>{base_stat}</Text>
          </View>
        ),
      )}
    </ScrollView>
  );
};

export default PokemonDetailView;
