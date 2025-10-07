import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from './navigationTypes';
import PokeeList from '../screens/PokeeList/PokeeList';

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName="PokeeList">
      <Stack.Screen
        name="PokeeList"
        component={PokeeList}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  );
};

export default NavigationStack;
