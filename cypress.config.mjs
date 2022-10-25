import {defineConfig} from "cypress";

export default defineConfig({
  downloadsFolder: "./cypress/downloads",
  e2e: {
    setupNodeEvent(on, config) {
      return import("./cypress/plugins")(on, config);
    },
    specPattern: "**/*.spec.js",
    supportFile: "./cypress/support/index.js",
    watchForFileChanges: false,
  },
  fixtureFolder: "./cypress/fixtures",
  screenshotsFolder: "./cypress/screenshots",
  userAgent: "LowerEnvString/9a045ab84c4610ffb459247df65a6377",
  videosFolder: "./cypress/videos",
});
