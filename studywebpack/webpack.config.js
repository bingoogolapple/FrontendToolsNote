module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devtool: 'source-map',  // 或者  webpack --devtool source-map
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'react-hot!babel'},
      {test: /\.css$/, loader: 'style!css'}
    ]
  }
};
