module.exports = function (api) {
  api.cache(true)
  const presets = [['@babel/preset-env', { targets: { node: '10' } }]]
  const plugins = [
    ['@babel/transform-runtime', { helpers: false }],
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
    ['@babel/plugin-proposal-class-properties'],
    ['@babel/plugin-proposal-private-methods'],
    ['@babel/plugin-proposal-optional-chaining'],
    ['@babel/plugin-proposal-nullish-coalescing-operator'],
  ]
  const ignore = ['node_modules/**']
  return {
    presets,
    plugins,
    ignore
  }
}
