const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const GoogleFontsPlugin = require('google-fonts-plugin')

module.exports = {
  entry: './assets/js/wnews.js',
  output: {
    filename: 'js/wnews.bundle.js',
    path: path.resolve(__dirname, 'assets')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
	  {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
		  {
            loader: 'file-loader',
            options: {
            	'outputPath': './',
            	'useRelativePath': true,
            	publicPath: '/assets/wnews/images/'
			}
          }
	  	]
      },
	  {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
		  {
            loader: 'file-loader',
            options: {
            	'outputPath': 'fonts/',
            	'useRelativePath': true,
				publicPath: '/assets/wnews/fonts/'
			}
          }
        ]
      },
	  {
        test: require.resolve('jquery'),
        use: [
        	{
			  loader: 'expose-loader',
			  options: 'jQuery'
		    },
		    {
				loader: 'expose-loader',
				options: '$'
			}
		]
      }
    ]
  },
  plugins: [
    new GoogleFontsPlugin({
		fonts: [
			{ family: "Noto Serif" }
		],
		filename: 'css/fonts.css'
	}),
    new MiniCssExtractPlugin({
        filename: "css/wnews.bundle.css"
    })
  ]
};
