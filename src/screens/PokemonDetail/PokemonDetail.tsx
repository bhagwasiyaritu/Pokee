import { View } from 'react-native';
import React, { useEffect } from 'react';
import styles from './PokemonDetail.styles';
import { usePokemonDetails } from '../../hooks/usePokemonDetails';
import Loader from '../../components/Loader/Loader';
import { RootStackParamList } from '../../navigation/navigationTypes';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import Header from '../../components/Header/Header';
import { CommonLabels } from '../../constants/labels/Labels';
import ErrorView from '../../components/ErrorView/ErrorView';
import EmptyState from '../../components/EmptyState/EmptyState';
import PokemonDetailsView from '../../components/PokemonDetailsView/PokemonDetailsView';

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
    return;
  }

  return (
    <View style={styles.container}>
      <Header
        title={CommonLabels.pokemonDetails}
        showIcon
        onPress={navigation.goBack}
      />
      {details ? (
        <PokemonDetailsView details={details} />
      ) : (
        <EmptyState message={CommonLabels.noDataFound} />
      )}
    </View>
  );
};

export default React.memo(PokemonDetail);
