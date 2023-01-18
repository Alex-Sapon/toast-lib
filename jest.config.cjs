module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'json'],
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    'nanoid': require.resolve('nanoid')
  },
  testMatch: [
    '<rootDir>/src(/__tests__/*.(js|jsx|ts|tsx))'
  ],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/'
  ]
};