import { View } from 'react-native';
import React from 'react';
import { usePokemonDetails } from '../../hooks/usePokemonDetails';
import PokemonDetailsView from '../../components/PokemonDetailsView/PokemonDetailsView';
import styles from './RandomPokemon.styles';
import Loader from '../../components/Loader/Loader';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import Header from '../../components/Header/Header';
import {
  CommonLabels,
  RandomPokemonLabel,
} from '../../constants/labels/Labels';
import { useNavigation } from '@react-navigation/native';
import ErrorView from '../../components/ErrorView/ErrorView';
import getRandomId from '../../util/helper/GetRandomDate/getRandom';
import { IMAGE_BASE_URL } from '../../services/baseURL';

const RandomPokemon = () => {
  const navigation = useNavigation();

  const { details, loading, error, refetch } = usePokemonDetails(2);

  const handleRandomize = () => {
    if (loading) return;

    const newRandomId = getRandomId();
    refetch({
      where: {
        id: { _eq: newRandomId },
      },
    });
  };

  const renderContent = () => {
    if (loading) {
      return (
        <>
          {details && (
            <PokemonDetailsView
              details={details}
              imageBaseUrl={IMAGE_BASE_URL}
            />
          )}
          <View style={styles.overlay}>
            <Loader />
          </View>
        </>
      );
    }

    if (error) {
      return <ErrorView message={error.message} />;
    }

    if (details) {
      return (
        <PokemonDetailsView details={details} imageBaseUrl={IMAGE_BASE_URL} />
      );
    }

    return null;
  };

  return (
    <View style={styles.container}>
      <Header
        title={CommonLabels.pokemonDetails}
        showIcon
        onPress={navigation.goBack}
      />
      <View style={styles.contentContainer}>{renderContent()}</View>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          title={RandomPokemonLabel.showAnother}
          onPress={handleRandomize}
          disable={loading}
        />
      </View>
    </View>
  );
};

export default RandomPokemon;
