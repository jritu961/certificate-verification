const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  // devServer: {
  //   host: '128.0.0.1',
  //  port: 8080,
  //  client: {
  //    webSocketURL: 'ws://192.168.0.103:8080/ws',
  //  },
  //   headers: {
  //    'Access-Control-Allow-Origin': '*',
  // }
// },
})

// const { defineConfig } = require('@vue/cli-service')
// module.exports = {
//   devServer: {
//     proxy: {
//       '^/api': {
//         target: 'http://localhost:5000',
//         changeOrigin: true
//       },
//     }
//   }
// }