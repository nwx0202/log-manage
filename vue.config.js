module.exports = {
  // publicPath: '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/spif' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  lintOnSave: true,
  runtimeCompiler: false,
  productionSourceMap: false,
  parallel: false,
  devServer: {
    open: true,
    port: 8888,
    proxy: {
      '/api': {
        target: 'http://193.160.57.148:18080/',
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    devtool: 'inline-source-map',
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    }
  },
}