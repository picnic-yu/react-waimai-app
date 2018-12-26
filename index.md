## eslint
cnpm i eslint eslint-loader eslint-plugin-react --save
```
配置
{
    loader:'eslint-loader'
}
```


## webpack 热更新
cnpm i react-hot-loader --save

```
const webpack = require('webpack');



 devServer: {
    contentBase: './dist',
    hot: true
},

添加一个插件实例化
new webpack.HotModuleReplacementPlugin(),
new webpack.NamedModulesPlugin()
然后src/index/Main新建一个 Container.jsx

import React from 'react';
import Main from './Main'
import {hot} from 'react-hot-loader';
// 热替换组件
class Container extends React.Component{
    render(){
        return <Main/>
    }
}

export default hot(module)(Container);



redux 也需要添加热更新
修改store.js文件

//add
if(module.hot){
    module.hot.accept('./reducers/main.js',()=>{
        const nextRootReducer = require('./reducers/main.js').default;
        store.replaceReducer(nextRootReducer);
    });
} 
```