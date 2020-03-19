module.exports = {
  presets: ['module:metro-react-native-babel-preset', 'module:react-native-dotenv'],
  env: {
    production: {}
  },
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ],
    ['@babel/plugin-proposal-optional-catch-binding'],
    [
      'module-resolver',
      {
        'cwd': 'babelrc',
        'root': ['./app'],
        'extensions': [
          '.js',
          '.ts',
          '.jsx',
          '.tsx',
          '.ios.js',
          '.ios.ts',
          '.ios.jsx',
          '.ios.tsx',
          '.android.js',
          '.android.ts',
          '.android.jsx',
          '.android.tsx'
        ],
        'alias': {
          '@components': './app/components',
          '@components/atoms': './app/components/atoms',
          '@components/molecules': './app/components/molecules',
          '@components/organisms': './app/components/organisms',
          '@navigators': './app/navigation/navigators',
          '@navigation': './app/navigation',
          '@screens': './app/screens',
          '@theme': './app/theme',
          '@transitions': './app/theme/transitions',
          '@models': './app/Mobx/Models',
        }
      }
    ]
  ],
}
