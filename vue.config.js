const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
//
// module.exports = {
//   devServer: {
//     proxy: 'http://185.233.119.207:81'
//   }
// }
const proxy = {
  '/api': {
    target: 'http://185.233.119.207:81',
    secure: false,
    changeOrigin: true
  }
};

module.exports = {
  filenameHashing: false,
  productionSourceMap: false,
  configureWebpack: config => {
    return {
      devServer: {
        proxy,
        //https: true
      }

    }
  }
}
