import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import { PokemonDetailLabel } from '../../constants/labels/Labels';
import FastImage from 'react-native-fast-image';
import { PokemonDetail } from '../../types/types';
import styles from './PokemonDetailsView.styles';

type Props = {
  details: PokemonDetail;
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
          uri: props.details.sprites.other['official-artwork'].front_default,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={styles.name}>
        {props.details.name.charAt(0).toUpperCase() +
          props.details.name.slice(1)}
      </Text>

      <View style={styles.infoRow}>
        <Text style={styles.label}>{PokemonDetailLabel.type}</Text>
        <Text style={styles.value}>
          {props.details.types.map(t => t.type.name).join(', ')}
        </Text>
      </View>

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
      {props.details.stats.map((stat, index) => (
        <View key={index} style={styles.infoRow}>
          <Text style={styles.label}>{stat.stat.name.replace('-', ' ')}:</Text>
          <Text style={styles.value}>{stat.base_stat}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default PokemonDetailView;
