import './Order.scss';
import React from 'react';
import {connect} from 'react-redux';
import { getOrderData } from '../actions/orderAction';
import ListItem from './ListItem/ListItem.jsx'

/**
 * @constructor <Order>
 * @description 订单页面
 */
class Order extends React.Component{
    constructor(props){
        super(props);
        this.page = 0;
        this.fetchData(this.page);
    }
    fetchData(page){
        this.props.dispatch(getOrderData(page));
    }
    renderList(){
        let {list} = this.props;
        return list.map((item, index) => {
            return (
                <ListItem key={index} itemData={item}></ListItem>
            )
        });
    }
    render(){
        return (
            <div className='order'>
                <div className='header'>订单</div>
                <div className='order-list'>
                    {this.renderList()}
                </div>
            </div>

        )
    }
}
export default connect(state=>({
    list:state.orderReducer.list
}))(Order);