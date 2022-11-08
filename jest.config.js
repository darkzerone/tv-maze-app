module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss)$": "<rootDir>/mocks/styleMock.js",
    "^dexie$": require.resolve("dexie"),
  },
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  transformIgnorePatterns: ["node_modules"],
};
