import { ORDER_DATA } from "./actionTypes";
import axios from 'axios';
export const getOrderData =(page)  => {
    return (dispatch) =>{

        axios({
            mathod:'get',
            url:'/json/orders.json'
        }).then(res=>{
            dispatch({
                type:ORDER_DATA,
                page:page,
                obj:res.data
            })
        });
    }
}