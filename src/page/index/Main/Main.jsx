import React from 'react';

import { connect } from 'react-redux';
import ButtomBar from '../BottomBar/BottomBar.jsx'
// import Home from '../Home/Home.jsx'
import Order from '../Order/Order.jsx'
class Main extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        
        return (
            <div>
                {/* <Home/> */}
                <Order/>
                <ButtomBar/>
            </div>
        );
    }
}
export default connect(state=>({
   state
}))(Main);