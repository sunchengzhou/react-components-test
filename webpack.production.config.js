var path=require("path");
const webpack=require("webpack");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports={
    devtool:"eval-source-map",
    entry:path.resolve(__dirname+"/app/main.js"),
    output:{
        path:path.resolve(__dirname+"/public"),
        filename:"bundle-[hash].js"
    },
    devServer:{
        contentBase:"./public",
        historyApiFallback:true,
        inline:true,
        port:8080
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:["css-loader","postcss-loader"]
                })
                // use: [
                //     {
                //         loader: "style-loader"
                //     }, {
                //         loader: "css-loader",
                //         options:{
                //             module:true
                //         }
                //     },{
                //         loader:"postcss-loader"
                //     }
                // ]
            }         
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:__dirname+"/app/index.tmpl.html"
        }),
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.css")        
    ]  
}