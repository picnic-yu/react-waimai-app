import React from 'react';
import './Category.scss';
import {connect} from 'react-redux';
import { getHeaderData } from '../../actions/categoryAction';
/**
 * @constructor <Category>
 * @description 外卖类别
 */
class Category extends React.Component{
    constructor(props){
        super(props);
        this.fetchData()
    }
    renderItems(){
        let items = this.props.items.slice(0,8);
        return items.map((item, index) => {
            return (
                <div key={index} className='category-item'>
                    <img src={item.url} alt="" className='item-icon'/>
                    <p className='item-name'>
                        {item.name}
                    </p>
                    
                </div>
            )
        })
    }
    fetchData(){
        this.props.dispatch(getHeaderData());
    }
    render(){
        return(
            <div className='category-content clearfix'>
                {this.renderItems()}
            </div>
        )
    }
}

export default connect(state=>({
    items:state.categoryReducer.items
}))(Category);