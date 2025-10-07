import { ScrollView, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import styles from './PokemonDetail.styles';
import { usePokemonDetails } from '../../hooks/usePokemonDetails';
import Loader from '../../components/Loader/Loader';
import { RootStackParamList } from '../../navigation/navigationTypes';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import Header from '../../components/Header/Header';
import { commonLabels, PokemonDetailLabel } from '../../constants/labels/Labels';
import ErrorView from '../../components/ErrorView/ErrorView';
import EmptyState from '../../components/EmptyState/EmptyState';
import FastImage from 'react-native-fast-image';

const PokemonDetail = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'PokemonDetail'>>();
  const navigation = useNavigation();

  const { details, loading, error, fetchDetails } = usePokemonDetails();

  useEffect(() => {
    fetchDetails(params.pokemonId);
  }, [params.pokemonId, fetchDetails]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorView message={error.message} />;
  }

  if (!details) {
    return <EmptyState message={commonLabels.noDataFound} />;
  }

  return (
    <View style={styles.container}>
      <Header
        title={PokemonDetailLabel.pokemonDetails}
        showIcon
        onPress={navigation.goBack}
      />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <FastImage
          style={styles.image}
          source={{
            uri: details.sprites.other['official-artwork'].front_default,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text style={styles.name}>
          {details.name.charAt(0).toUpperCase() + details.name.slice(1)}
        </Text>

        <View style={styles.infoRow}>
          <Text style={styles.label}>{PokemonDetailLabel.type}</Text>
          <Text style={styles.value}>
            {details.types.map(t => t.type.name).join(', ')}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>{PokemonDetailLabel.height}</Text>
          <Text style={styles.value}>
            {details.height / 10}
            {PokemonDetailLabel.m}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>{PokemonDetailLabel.weight}</Text>
          <Text style={styles.value}>
            {details.weight / 10}
            {PokemonDetailLabel.kg}
          </Text>
        </View>

        <Text style={styles.sectionTitle}>{PokemonDetailLabel.baseStats}</Text>
        {details.stats.map((stat, index) => (
          <View key={index} style={styles.infoRow}>
            <Text style={styles.label}>
              {stat.stat.name.replace('-', ' ')}:
            </Text>
            <Text style={styles.value}>{stat.base_stat}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default PokemonDetail;
