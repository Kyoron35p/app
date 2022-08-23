const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭ESlint代码校验
  lintOnSave: false,
  // run项目之后直接在浏览器中打开
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080
  }
})
