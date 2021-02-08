module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '^/': {
        target: 'https://api.pandascore.co',
        changeOrigin: true
      }
    }
  }
}
