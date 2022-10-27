export default {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*"],
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  reporters: ["default", "jest-junit"],
  coverageReporters: ["json-summary", "text", "html", "text-summary"],
  setupFilesAfterEnv: ["<rootDir>/src/resources/scripts/jest.setup.js"],
  moduleFileExtensions: ["js"],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: [".(setup|config).js"],
  testMatch: ["?(**/)*.jest.js"],
  rootDir: ".",
  displayName: "JEST unit test",
  coverageThreshold: {
    global: {
      statements: 85,
      branches: 80,
      functions: 85,
      lines: 85,
    },
  },
  // globals: {
  //   "ts-jest": {
  //     tsconfig: "<rootDir>/tsconfig.json",
  //     isolatedModules: true,
  //   },
  // },
  transform: {
    ".js": "babel-jest",
    ".css": "jest-transform-css",
  },
  verbose: true,
};
