import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from './navigationTypes';
import PokemonList from '../screens/PokemonList/PokemonList';
import PokemonDetail from '../screens/PokemonDetail/PokemonDetail';

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName="PokemonList">
      <Stack.Screen
        name="PokemonList"
        component={PokemonList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PokemonDetail"
        component={PokemonDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default NavigationStack;
