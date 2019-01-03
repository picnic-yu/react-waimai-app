import { LIST_DATA } from "./actionTypes";
import axios from 'axios';
export const getListData =()  => {
    return (dispatch) =>{

        axios({
            mathod:'get',
            url:'/json/homelist.json'
        }).then(res=>{
            dispatch({
                type:LIST_DATA,
                obj:res.data
            })
        });
    }
}