module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '18',
        },
      },
    ],

    '@babel/preset-typescript',

    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],

  plugins: [
    ['@babel/plugin-transform-runtime', {
      regenerator: true,
    }],

    '@babel/plugin-transform-typescript',
    '@babel/plugin-transform-private-methods',
    '@babel/plugin-transform-class-properties',
    
    ['module-resolver', {
      alias: {
        '@core': './src/core',
        '@vendor': './src/vendor',
        '@@types': './src/@types',
        '@shared': './src/shared',
      },
    }],
  ],
};
