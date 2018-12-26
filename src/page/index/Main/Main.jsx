import React from 'react';

import { connect } from 'react-redux';
import ButtomBar from '../BottomBar/BottomBar.jsx'
import Home from '../Home/Home.jsx'
class Main extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        
        return (
            <div>
                <Home/>
                <ButtomBar/>
            </div>
        );
    }
}
export default connect(state=>({
   state
}))(Main);