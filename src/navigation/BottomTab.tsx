import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from './navigationTypes';
import PokemonList from '../screens/PokemonList/PokemonList';
import RandomPokemon from '../screens/RandomPokemon/RandomPokemon';
import COLORS from '../constants/color/Colors';
import { FONT_SIZES, FONT_WEIGHTS } from '../constants/typography/Typography';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { COMMON_ALIGNMENT } from '../constants/calc/Calc';
import { verticalScale } from 'react-native-size-matters';

const Tab = createBottomTabNavigator<RootTabParamList>();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarStyle: {
          height: verticalScale(60),
          paddingVertical: COMMON_ALIGNMENT.verticalPadding,
        },
        tabBarLabelStyle: {
          fontSize: FONT_SIZES.sm,
          fontWeight: FONT_WEIGHTS.bold,
        },
      }}
    >
      <Tab.Screen
        name="PokemonList"
        component={PokemonList}
        options={{
          headerShown: false,
          tabBarLabel: 'List',
          tabBarIcon: ({ focused }) => (
            <FontAwesome6
              name="rectangle-list"
              size={24}
              color={focused ? COLORS.primary : COLORS.darkGray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="RandomPokemon"
        component={RandomPokemon}
        options={{
          headerShown: false,
          tabBarLabel: 'Random',
          tabBarIcon: ({ focused }) => (
            <FontAwesome6
              name="chess-rook"
              size={24}
              color={focused ? COLORS.primary : COLORS.darkGray}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
