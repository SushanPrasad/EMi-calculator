const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? 'EMi-calculator' : '/',
};
