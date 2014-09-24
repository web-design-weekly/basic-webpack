module.exports = {
  entry: './main.js',
  output: {
    path: './build', // This is where images AND js will go
    publicPath: 'http://web-design-weekly.com/', // This is used to generate URLs to e.g. images
    filename: 'bundle.js'
  },
module: {
    loaders: [
        { test: /\.coffee$/, loader: "coffee-loader" },
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
}
};
