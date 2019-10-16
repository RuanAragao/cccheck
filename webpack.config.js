const path = require('path');

module.exports = {
  entry: ['./js/jquery.cccheck.js', './scss/cccheck.scss'],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/jquery.cccheck.js'
  },

  module: {
    rules: [{
        test: /\.js$/,
        use: 'babel-loader'
      },

      {
        test: /\.scss$/,
        use: [
          {
						loader: 'file-loader',
						options: {
              name: 'css/[name].css',
            }
          },
					{
						loader: 'sass-loader'
					}
        ]
      }
    ]
  }
};