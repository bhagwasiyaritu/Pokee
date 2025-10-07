import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from './navigationTypes';
import PokemonDetail from '../screens/PokemonDetail/PokemonDetail';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
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
