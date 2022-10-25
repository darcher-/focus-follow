export default {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*"],
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  coverageReporters: ["html", "text", "text-summary"],
  setupFilesAfterEnv: ["./src/resources/scripts/jest.setup.js"],
  moduleFileExtensions: ["js"],
  testEnvironment: "jsdom",
  testMatch: ["*.test.js", "**/*.test.js"],
  // moduleNameMapper: { "\\.(c|sa)ss$": "src/**/*.fixture.js" },
  transform: {"\\.[jt]sx?$": "babel-jest"},
  verbose: true,
};
