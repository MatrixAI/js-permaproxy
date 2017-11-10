import babel from 'rollup-plugin-babel';

export default [
  {
    input: 'lib/index.js',
    output: {
      file: 'dist/index.node.es.js',
      format: 'es'
    },
    plugins: [
      babel({
        babelrc: false,
        exclude: 'node_modules/**',
        runtimeHelpers: true,
        plugins: [],
        presets: [
          ['env', {
            modules: false,
            targets: {
              node: '6.4.0'
            }
          }]
        ]
      })
    ]
  },
  {
    input: 'lib/index.js',
    output: {
      file: 'dist/index.node.cjs.js',
      format: 'cjs'
    },
    plugins: [
      babel({
        babelrc: false,
        exclude: 'node_modules/**',
        runtimeHelpers: true,
        plugins: [],
        presets: [
          ['env', {
            modules: false,
            targets: {
              node: '6.4.0'
            }
          }]
        ]
      })
    ]
  },
  {
    input: 'lib/index.js',
    output: {
      file: 'dist/index.browser.umd.js',
      format: 'umd',
      name: 'PermaProxy'
    },
    plugins: [
      babel({
        babelrc: false,
        exclude: 'node_modules/**',
        runtimeHelpers: true,
        plugins: [],
        presets: [
          ['env', {
            modules: false,
            targets: {
              browsers: ['last 2 versions']
            }
          }]
        ]
      })
    ]
  }
];
