//https://www.youtube.com/results?search_query=webpack+4++Jack+Coder
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const PATHS = {
	src: path.join(__dirname, '../src'),
	dist: path.join(__dirname, '../dist'),
	assets: 'static/'
}
module.exports = {
	externals: {
		paths: PATHS
	},
	entry: {
		app: `${PATHS.src}/index.jsx`
	},
	output: {		
		filename: `${PATHS.assets}js/[name].[hash].js`,
		path: PATHS.dist,
		publicPath: '/'
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: 'vendors',
					test: /node_modules/,
					chunks: 'all',					
					enforce: true
				}
			}
		}
	},
	module: {
		rules: [		
		{
			test: /\.jsx$/,
			loader: 'babel-loader',
			exclude: '/node_modules/'
		}, {
			test: /\.scss$/,
			use: [
				'style-loader',
				MiniCssExtractPlugin.loader,
				{
					loader: 'css-loader',
					options: {sourceMap: true}
				}, {
					loader: 'postcss-loader',
					options: {sourceMap: true, config: {path : './postcss.config.js'}}
				}, {
					loader: 'sass-loader',
					options: {sourceMap: true}
				}
			]
		}, {
			test: /\.(png|jpg|gif|svg)$/,
			loader: 'file-loader',
			options: {
				name: '[name].[ext]'
			}
		}, {
			test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'file-loader',
			options: {
				name: '[name].[ext]'
			}
		}

		]
	},
	resolve: {
		alias: {
		}
	},	
	// регистрируем плагины
	plugins: [
		new MiniCssExtractPlugin({
			filename: `${PATHS.assets}css/[name].[hash].css`
			//filename: "[name].css",
		}),
		new HtmlWebpackPlugin({
			template: `${PATHS.src}/index.html`,
			filename: 'index.html',
			inject: false
		}),
		// копирование файлов
		new CopyWebpackPlugin([
			{from: `${PATHS.src}/assets/img`, to: `${PATHS.assets}img`},
			{from: `${PATHS.src}/assets/fonts`, to: `${PATHS.assets}fonts`},
			{from: `${PATHS.src}/static`, to: ''}
		]),
		new webpack.DefinePlugin({  
			// константа, чтобы картинки и другие ресурсы были доступны при изменении настройки webpack
			PARH_RESOURCE: `/${PATHS.assets}`
      	})
	]
}