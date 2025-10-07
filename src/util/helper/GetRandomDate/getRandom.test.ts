import getRandomId from './getRandom';
import { MAX_POKEMON_ID } from '../../../constants/calc/Calc';

describe('getRandomId', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('returns an integer between 1 and 151', () => {
    const id = getRandomId();
    expect(Number.isInteger(id)).toBe(true);
    expect(id).toBeGreaterThanOrEqual(1);
    expect(id).toBeLessThanOrEqual(MAX_POKEMON_ID);
  });

  test('when Math.random returns 0 -> returns 1', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0);
    const id = getRandomId();
    expect(id).toBe(1);
  });

  test('when Math.random returns just below 1 -> returns 151', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.999999999999);
    const id = getRandomId();
    expect(id).toBe(MAX_POKEMON_ID);
  });
});
