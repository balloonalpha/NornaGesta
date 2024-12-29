const path = require('path');

module.exports = {
  mode: "none",
  entry: './src/nc.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'scripts'),
    chunkFormat: "module"
  },
  experiments: {
    outputModule: true,
  },
  externalsType: 'module',
  externals: {
    '@minecraft/server': '@minecraft/server',
    '@minecraft/server-ui': '@minecraft/server-ui'
  },
  target: "es2020"
};