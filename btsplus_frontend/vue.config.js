module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    host: 'localhost',
    port: 80,
    // 以下代码会使项目运行成功后自动打开浏览器
    // open: true
  },

  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'BTSplus';
        return args
      })
  },

  transpileDependencies: [
    'vuetify'
  ]
};
