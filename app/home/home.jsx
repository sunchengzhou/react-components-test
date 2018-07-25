'use strict'
import React,{Component} from "react";
class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }
    render(){
        const { value,onadd,onreduce,store } = this.props;
        console.log(store.getState())
     return  (
         <p className="container home">
             
             <button className="btn btn-primary" onClick={onadd}>+</button>
             <span>点击次数： {value} 次</span> 
             <button className="btn btn-primary" onClick={onreduce}>-</button>
         </p>
     )
    }
}
export default Home;