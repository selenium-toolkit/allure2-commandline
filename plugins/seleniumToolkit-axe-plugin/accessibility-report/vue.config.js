const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './', // Hier wird der publicPath gesetzt, um relative Pfade zu verwenden
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
