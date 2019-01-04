
import React from 'react';
import './ListItem.scss';
/**
 * @constructor <ListItem>
 * @description 订单列表单个组件
 */
class ListItem extends React.Component{
    constructor(props){
        super(props);   
    }
    // 渲染具体菜品
    renderProduct(data){
        console.log(data)
        let { product_list } = data;
        product_list.push({
            type:'more'
        });
        return product_list.map((item,index) => {
            if(item.type === 'more'){
                return(
                    <div className='product-item' key={index}>
                        <span>...</span>
                        <div className='p-total-count'>
                            总计{data.product_count}个菜，实付￥
                            <span className='total-price'>{data.total}</span>
                        </div>
                    </div>
                )
            }
            return <div className='product-item' key={index}>
                {item.product_name}
                <div className='p-count'>x{item.product_count}</div>
            </div>
        });
    }
    //渲染评价按钮
    renderComment(data){
        console.log(data)
    }
    render(){
        let data = this.props.itemData;
        return(
            <div className='order-item '>
                <div className='order-item-inner'>
                   <img className='item-img' src={data.poi_pic} alt=""/>
                   <div className='item-right'>
                        <div className='item-top'>
                            <p className='order-name one-line'>{data.poi_name}</p>
                            <div className='arrow'></div>
                            <div className='order-state'>{data.status_description}</div>
                        </div>
                        <div className='item-bottom'>
                            {this.renderProduct(data)}
                        </div>
                   </div>
                </div>
                {this.renderComment(data)}
            </div>
        )
    }
}

export default ListItem;