import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import PokemonItem from './PokemonItem';

describe('PokemonItem', () => {
  const baseProps = {
    id: 25,
    name: 'pikachu',
    imageBaseUrl: 'https://poke.example/',
    onPress: jest.fn(),
    types: [{ type_id: 13 }],
  };

  test('renders name capitalized and image with correct uri', () => {
    const { getByTestId, queryAllByTestId } = render(
      <PokemonItem {...baseProps} />
    );

    const name = getByTestId('pokemon-name');
    expect(name.props.children).toBe('Pikachu');

    const image = getByTestId('pokemon-image');
    expect(image.props.source).toEqual(
      expect.objectContaining({ uri: `${baseProps.imageBaseUrl}${baseProps.id}.png` })
    );

    const typeImages = queryAllByTestId('pokemon-type-image');
    expect(typeImages.length).toBe(1);
    expect(typeImages[0].props.source).toEqual(
      expect.objectContaining({
        uri:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/13.png',
      })
    );
  });

  test('calls onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <PokemonItem {...baseProps} onPress={onPress} />
    );

    const wrapper = getByTestId('pokemon-item');
    fireEvent.press(wrapper);
    expect(onPress).toHaveBeenCalled();
  });

  test('does not render types container when types is empty', () => {
    const { queryByTestId } = render(
      <PokemonItem {...baseProps} types={[]} />
    );

    const typeImage = queryByTestId('pokemon-type-image');
    expect(typeImage).toBeNull();
  });
});
