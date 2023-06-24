/* eslint-disable */
module.exports = {
  // ... other configurations

  // The directory where Jest should store its cached dependency information

  transform: {
    '^.+\\.js$': 'babel-jest'
  },

  transformIgnorePatterns: [
    "/node_modules/",
    "\\.css$"
  ],
  
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  
  // ... other configurations

  testEnvironment: "jest-environment-jsdom",
};
