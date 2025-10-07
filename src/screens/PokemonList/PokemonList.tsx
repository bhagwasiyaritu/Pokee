import { FlatList, View } from 'react-native';
import React, { useEffect } from 'react';
import { usePokemonList } from '../../hooks/usePokemonList';
import PokemonItem from '../../components/PokemonItem/PokemonItem';
import { Pokemon } from '../../types/types';
import { useNavigation } from '@react-navigation/native';
import Divider from '../../components/Divider/Divider';
import Loader from '../../components/Loader/Loader';
import Header from '../../components/Header/Header';
import EmptyState from '../../components/EmptyState/EmptyState';
import { commonLabels, PokemonListLabel } from '../../constants/labels/Labels';
import { RootStackParamList } from '../../navigation/navigationTypes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ErrorView from '../../components/ErrorView/ErrorView';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const PokemonList = () => {
  const navigation = useNavigation<NavigationProp>();
  const { pokemons, loading, error, fetchList } = usePokemonList();

  useEffect(() => {
    fetchList(10, 0);
  }, [fetchList]);

  const handlePressPokemon = (id: number) => {
    navigation.navigate('PokemonDetail', { pokemonId: id });
  };

  const renderPokemon = ({ item }: { item: Pokemon }) => (
    <PokemonItem
      image={item.imageUrl}
      name={item.name}
      id={item.id}
      onPress={() => handlePressPokemon(item.id)}
    />
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorView message={error.message} />;
  }

  return (
    <View>
      <Header title={PokemonListLabel.pokemonList} />
      <FlatList
        data={pokemons}
        renderItem={renderPokemon}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={11}
        ItemSeparatorComponent={Divider}
        ListEmptyComponent={
          !loading ? <EmptyState message={commonLabels.noDataFound} /> : null
        }
      />
    </View>
  );
};

export default PokemonList;
