
const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')

const html_plugin=new HtmlWebpackPlugin({
    template:path.join(__dirname,'./src/index.html'),
    filename:'index.html'
})

module.exports={
    mode:'development',
    plugins:[
        html_plugin
    ],
    resolve:{
        extensions:['.js','.jsx','.json'],
        alias:{
            //配置@表示到src文件下     
                '@' : path.join(__dirname,'./src'),
             }
    },
    module: {
        rules: [
            {    //解析bootstrap样式各种文件
                test:/\.ttf|.woff2|.woff|.eot|.svg$/,
                 use:'url-loader'
          },
          {
                test: /\.js|jsx$/,
                use:'babel-loader',
                exclude:/node_modules/,
           },
           {
            test:/\.css$/,
            use:['style-loader','css-loader']
        
          },

          {
            test:/\.less$/,
            use:['style-loader','css-loader','less-loader']
        
          },
          {
            test:/\.scss$/,
              use:[
                  'style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[path][name]-[local]-[hash:5]',
                        },
                    },
        
                  },
                  'sass-loader'
                ]
          
          }
        ]
      },

}