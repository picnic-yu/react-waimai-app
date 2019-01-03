
import React from 'react';
import './ContentList.scss';
import ListItem from './ListItem/ListItem.jsx'
import {connect} from 'react-redux';
import { getListData } from '../../actions/contentListAction.js';
/**
 * @constructor <ContentList>
 * @description 外卖类别
 */
class ContentList extends React.Component{
    constructor(props){
        super(props);
        this.fetchData()
    }
    renderItems(){
        let list = this.props.list;
        return list.map((listItem,index) =>{
            return (
                <ListItem key={index} itemData={listItem}></ListItem>
            )
        });
    }
    fetchData(){
        this.props.dispatch(getListData());
    }
    render(){
        return(
            <div className='list-content'>
               <h4 className='list-title'>
                    <span className='title-line'></span>
                    附近商家
                    <span className='title-line'></span>
               </h4>
               {this.renderItems()}
            </div>
        )
    }
}

export default connect(state=>({
    list:state.contentListReducer.list
}))(ContentList);