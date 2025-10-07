module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|@react-navigation|react-native|react-clone-referenced-element|react-native-screens|react-native-safe-area-context|@react-native-vector-icons)',
  ],
  moduleNameMapper: {
    '\\.(ttf|otf)$': '<rootDir>/src/__mocks__/fileMock.js',
  },
};
