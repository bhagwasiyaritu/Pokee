import { View } from 'react-native';
import React from 'react';
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
import { IMAGE_BASE_URL } from '../../services/baseURL';

const PokemonDetail = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'PokemonDetail'>>();
  const navigation = useNavigation();

  const { details, loading, error } = usePokemonDetails(params.pokemonId);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorView message={error.message} />;
  }

  if (!details) {
    return <EmptyState message={CommonLabels.noDataFound} />;
  }

  return (
    <View style={styles.container}>
      <Header
        title={CommonLabels.pokemonDetails}
        showIcon
        onPress={navigation.goBack}
      />
      {details ? (
        <PokemonDetailsView details={details} imageBaseUrl={IMAGE_BASE_URL} />
      ) : (
        <EmptyState message={CommonLabels.noDataFound} />
      )}
    </View>
  );
};

export default React.memo(PokemonDetail);
