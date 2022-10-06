module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current'
          }
        }
      ],
      '@babel/preset-typescript'
    ],
    plugins: [
      ['module-resolver', {
        alias: {
          '@infrastructure': './src/infrastructure',
          '@core': './src/core',
          '@bin': './src/bin',
          '@databases': './src/infrastructure/databases',
          '@config': './src/infrastructure/config',
        }
      }]
    ],
    ignore: [
      '**/*.spec.ts'
    ]
  }