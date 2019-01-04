
import React from 'react';
import './ContentList.scss';
import ListItem from './ListItem/ListItem.jsx'
import {connect} from 'react-redux';
import { getListData } from '../../actions/contentListAction.js';
import Loading from 'component/Loading/Loading.jsx'
/**
 * @constructor <ContentList>
 * @description 外卖类别
 */
class ContentList extends React.Component{
    constructor(props){
        super(props);
        this.page = 0;
        this.fetchData(this.page = 0);
        this.state = {
            isend:false
        }
        
    }
    onloadPage(){
        let clientHeight = document.documentElement.clientHeight;
        let scrollHeight = document.body.scrollHeight;
        let scrollTop = document.documentElement.scrollTop;
        let proLoadDis = 30;
        if(scrollTop + clientHeight >= scrollHeight-proLoadDis){
            this.page++;
            window.console.log(2)
            if(this.page >3){
                this.setState({
                    isend:true
                })
            }else{
                this.fetchData(this.page);
            }
            
        }
    }
    // componentWillUnmount 16.3 呗下面替换
    UNSAFE_componentWillMount (){
        window.addEventListener('scroll',this.onloadPage.bind(this));
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.onloadPage.bind(this))
    }
    renderItems(){
        let list = this.props.list;
        return list.map((listItem,index) =>{
            return (
                <ListItem key={index} itemData={listItem}></ListItem>
            )
        });
    }
    fetchData(page){
        this.props.dispatch(getListData(page));
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
               <Loading isend={this.state.isend}/>
            </div>
        )
    }
}

export default connect(state=>({
    list:state.contentListReducer.list
}))(ContentList);