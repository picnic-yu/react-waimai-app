const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const srcRoot =path.resolve(__dirname,'src');;
const devPath = path.resolve(__dirname,'dev');
const pageDir = path.resolve(srcRoot,'page');
const mainFile = 'index.js';//入口文件
// 多入口
function getEntry(){
    let entryMap = {};
    // 同步寻找pageDir下面路径   fs.readdirSync(pageDir)方法将返回一个包含“指定目录下所有文件名称”的数组对象
    fs.readdirSync(pageDir).forEach((pathname) => {
        let fullPathName = path.resolve(pageDir,pathname);
        let stat = fs.statSync(fullPathName);//主要用来判断是文件还是目录
        let fileName = path.resolve(fullPathName,mainFile);//
        // 遍历得是一个目录且 入口文件存在时候 添加入口文件
        if(stat.isDirectory() && fs.existsSync(fileName)){
            entryMap[pathname] = fileName;
        }
    });
    return entryMap;
}
function getHtmlArray(entryMap){
    let htmlArray = [];
    Object.keys(entryMap).forEach((key) => {
        let fullPathName = path.resolve(pageDir,key);
        let fileName = path.resolve(fullPathName,key+'.html');
        if(fs.existsSync(fileName)){
            htmlArray.push(new HtmlWebpackPlugin({
                filename:key+'.html',
                template:fileName,
                chunks:[key]
            }))
        }
        
    });
    return htmlArray;
}
const entryMap = getEntry();
const htmlArray = getHtmlArray(entryMap);

module.exports = {
    mode:'development',
    entry:entryMap,
    output:{
        path:devPath,
        filename:'[name].min.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
                include:srcRoot
            },
            {
                test: /\.(js|jsx)$/,
                // yarn add babel-core babel-loader -D
                // yarn add babel-preset-env babel-preset-stage-0 babel-preset-react -D
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['env','stage-0','react']//映射 es6  7  react
                        }
                    }
                ],
                include:srcRoot
                
            },
            // npm install --save-dev sass-loader
            // npm install --save-dev node-sass
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader'],
                include:srcRoot
            },
            {
                test:/\.(png|jpg|jpeg)$/,
                use:'url-loader?limit=8192',
                include:srcRoot
            }
        ]
    },
    plugins:[

    ].concat(htmlArray)
}