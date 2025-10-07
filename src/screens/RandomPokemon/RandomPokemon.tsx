import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
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
import getRandomId from '../../util/helper/getRandom';

const RandomPokemon = () => {
  const { details, loading, error, fetchDetails } = usePokemonDetails();
  const navigation = useNavigation();

  const [randomId, setRandomId] = useState(getRandomId);

  useEffect(() => {
    fetchDetails(randomId);
  }, [randomId, fetchDetails]);

  const handleRandomize = () => {
    setRandomId(getRandomId());
  };

  const renderContent = () => {
    if (loading) {
      return (
        <>
          {details && <PokemonDetailsView details={details} />}
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
      return <PokemonDetailsView details={details} />;
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
