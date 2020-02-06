module.exports = function (api) {
  api.cache(true)
  const presets = ['@babel/preset-env']
  const plugins = [
    ['@babel/plugin-proposal-class-properties'],
    ['@babel/plugin-proposal-private-methods'],
    ['@babel/plugin-proposal-nullish-coalescing-operator'],
    ['@babel/plugin-proposal-optional-chaining'],
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
    ['@babel/transform-runtime', { helpers: false }]
  ]
  const ignore = ['node_modules/**']
  return {
    presets,
    plugins,
    ignore
  }
}
