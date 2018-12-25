import React from 'react';

import { connect } from 'react-redux';
import { addTodo } from '../actions/tabAction';
import ButtomBar from '../BottomBar/BottomBar.jsx'
class Main extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        
        return (
            <ButtomBar/>
        );
    }
}
export default connect(state=>({
   
}))(Main);;