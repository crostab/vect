module.exports = function (api) {
  api.cache(true)
  const presets = [ [ '@babel/preset-env', { targets: { node: '14' }, loose: true } ] ]
  const plugins = [
    // [ '@babel/plugin-proposal-optional-chaining' ],
    // [ '@babel/plugin-proposal-nullish-coalescing-operator' ],
    [ '@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' } ],
    // [ '@babel/plugin-proposal-class-properties', { loose: true } ],
    // [ '@babel/plugin-proposal-private-methods', { loose: true } ],
    // [ '@babel/plugin-transform-runtime', { helpers: false, } ]
  ]
  const ignore = [ 'node_modules/**' ]
  return {
    presets,
    plugins,
    ignore
  }
}
