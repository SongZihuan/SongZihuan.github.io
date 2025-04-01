const autoprefixer = require('autoprefixer')

module.exports = () => {
  // 添加 postcss 插件
  const plugins = [autoprefixer()]

  return {
    plugins
  }
}
