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
import { CommonLabels, PokemonListLabel } from '../../constants/labels/Labels';
import { RootStackParamList } from '../../navigation/navigationTypes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ErrorView from '../../components/ErrorView/ErrorView';
import styles from './PokemonList.styles';
import { POKEMON_ITEM_HEIGHT } from '../../constants/calc/Calc';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const PokemonList = () => {
  const navigation = useNavigation<NavigationProp>();
  const { pokemons, loading, error, hasMore, loadMorePokemons } =
    usePokemonList();

  useEffect(() => {
    loadMorePokemons();
  }, []);

  const handlePressPokemon = (id: number) => {
    navigation.navigate('PokemonDetail', { pokemonId: id });
  };

  const renderFooter = () => {
    if (!loading || !hasMore) return null;
    return (
      <View style={styles.footerLoader}>
        <Loader />
      </View>
    );
  };

  const renderPokemon = ({ item }: { item: Pokemon }) => (
    <PokemonItem
      image={item.imageUrl}
      name={item.name}
      id={item.id}
      onPress={() => handlePressPokemon(item.id)}
    />
  );

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
        keyExtractor={(item, index) => `${item.id}-${index}`}
        showsVerticalScrollIndicator={false}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={11}
        ItemSeparatorComponent={Divider}
        onEndReached={loadMorePokemons}
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
