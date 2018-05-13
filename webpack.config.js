const path = require('path');

module.exports = {
  entry: './src/main.tsx',
  mode: 'development',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: [path.join(__dirname, "public"), path.join(__dirname, "dist")],
    compress: true,
    port: 9000,
    watchContentBase: true,
  },
};