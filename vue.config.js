module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://193.160.57.148:18080/',
        changeOrigin: true
      }
    }
  }
}