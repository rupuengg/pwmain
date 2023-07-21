const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '..', 'src', 'main.tsx'),
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, '..', 'public'),
    open: true,
    port: 3000,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
        // exclude: /node_modules/,
        include: path.join(__dirname, 'public'),
        use: ['file-loader', 'url-loader'],
        // use: [
        // {
        //   loader: 'file-loader',
        // },
        // {
        // loader: 'url-loader',
        //   }
        // ]
      }
    ],
  },
  resolve: {
    extensions: [
      '.tsx', '.ts', '.jsx', '.js',
    ],
  },
  target: ['web', 'es5'],
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'public', 'index.html'),
      // filename: './index.html',
      // favicon: './public/icons8-home-26.png',
      // manifest: './public/manifest.json',
      // base: './',
    }),
  ],
};
