const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'b3raiy',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://pushing-front.vercel.app/',
  },

  env: {
    user: 'pushingit',
    pass: '123456!',
  },
});
