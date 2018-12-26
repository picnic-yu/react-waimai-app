import './Header.scss';

import React from 'react';

/**
 * @constructor <Header>
 * @description 顶部banner
 */
class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className ='header'>
                <img className='banner-img' src="//xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg" alt=""/>
            </div>
        )
    }
}
export default Header;