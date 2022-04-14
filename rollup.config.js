import babel                           from '@rollup/plugin-babel'
import commonjs                        from '@rollup/plugin-commonjs'
import json                            from '@rollup/plugin-json'
import nodeResolve                     from '@rollup/plugin-node-resolve'
// import { decoObject, decoString, ros } from '@spare/logger'
// import fileInfo                        from 'rollup-plugin-fileinfo'

const { name, dependencies, main, module ,exports } = require(process.cwd() + '/package.json')

// console.log(ros('Executing'), name, decoString(process.cwd()))
// console.log(ros('Dependencies'), decoObject(dependencies || {}))

export default [
  {
    input: 'index.js',
    external: Object.keys(dependencies || {}),
    output: [
      { file: exports['import'], format: 'esm' },  // ES module (for bundlers) build.
      { file: exports['require'], format: 'cjs' }  // CommonJS (for Node) build.
    ],
    plugins: [
      nodeResolve({ preferBuiltins: true }),
      commonjs({ include: /node_modules/ }),
      babel({
        babelrc: false,
        comments: true,
        sourceMap: true,
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
        presets: [
          [ '@babel/preset-env', { targets: { node: '16' } } ]
        ],
        plugins: [
          [ '@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' } ],
        ]
      }),
      json(),
      // fileInfo(),
    ]
  }
]
