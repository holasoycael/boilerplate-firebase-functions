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
    [
      'module-resolver',
      {
        alias: {
          '@controllers': './src/controllers',
          '@utils': './src/utils',
          '@configs': './src/configs',
          '@middlewares': './src/middlewares',
          '@routes': './src/routes'
        }
      }
    ]
  ],
  ignore: ['**/*.spec.ts']
}
