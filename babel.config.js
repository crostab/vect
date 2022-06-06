module.exports = function (api) {
  api.cache(true)
  const presets = [['@babel/preset-env', { targets: { node: '16' } }],]
  const plugins = [['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],]
  const ignore = ['node_modules/**']
  return { presets, plugins, ignore }
}
