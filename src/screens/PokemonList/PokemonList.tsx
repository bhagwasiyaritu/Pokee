import { FlatList, View } from 'react-native';
import React, { useCallback } from 'react';
import { usePokemonList } from '../../hooks/usePokemonList';
import PokemonItem from '../../components/PokemonItem/PokemonItem';
import { Pokemon } from '../../types/types';
import { useNavigation } from '@react-navigation/native';
import Divider from '../../components/Divider/Divider';
import Loader from '../../components/Loader/Loader';
import Header from '../../components/Header/Header';
import EmptyState from '../../components/EmptyState/EmptyState';
import { CommonLabels, PokemonListLabel } from '../../constants/labels/Labels';
import { RootStackParamList } from '../../navigation/navigationTypes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ErrorView from '../../components/ErrorView/ErrorView';
import styles from './PokemonList.styles';
import { POKEMON_ITEM_HEIGHT } from '../../constants/calc/Calc';
import { IMAGE_BASE_URL } from '../../services/baseURL';
import { useDebounce } from '../../hooks/useDebounce';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const PokemonList = () => {
  const navigation = useNavigation<NavigationProp>();
  const { pokemons, loading, error, hasMore, loadMorePokemons } =
    usePokemonList();

  const debouncedLoadMore = useDebounce(loadMorePokemons, 300);

  const handlePressPokemon = useCallback(
    (pokemonId: number) => {
      navigation.navigate('PokemonDetail', { pokemonId });
    },
    [navigation],
  );

  const renderPokemon = useCallback(
    ({ item }: { item: Pokemon }) => (
      <PokemonItem
        id={item.id}
        name={item.name}
        imageBaseUrl={IMAGE_BASE_URL}
        onPress={() => handlePressPokemon(item.id)}
        types={item.pokemontypes}
      />
    ),
    [handlePressPokemon],
  );

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={styles.footerLoader}>
        <Loader />
      </View>
    );
  };

  if (loading && pokemons.length === 0) {
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
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={11}
        ItemSeparatorComponent={Divider}
        onEndReached={hasMore ? debouncedLoadMore : null}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        contentContainerStyle={styles.listContainer}
        bounces={false}
        ListEmptyComponent={
          !loading ? <EmptyState message={CommonLabels.noDataFound} /> : null
        }
        getItemLayout={(_, index) => ({
          length: POKEMON_ITEM_HEIGHT,
          offset: POKEMON_ITEM_HEIGHT * index,
          index,
        })}
      />
    </View>
  );
};

export default PokemonList;
