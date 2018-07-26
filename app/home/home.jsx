'use strict'
import React,{Component} from "react";
class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
        this.oddAdd = this.oddAdd.bind(this);
        this.reAdd = this.reAdd.bind(this);
    }
    oddAdd() {
      const { store } = this.props;
      const value = store.getState().toString();
      if(value%2 == 0) {
        store.dispatch({
          type:'ADD'
        })
      }
    }
    reAdd() {
      const { store } = this.props;
      setTimeout(() => {
        store.dispatch({
          type:'ADD'
        })
      },2000)
    }
    render(){
        const { value,onadd,onreduce } = this.props;
     return  (
         <div className="container home">
             
             <button className="btn btn-primary" onClick={onadd}>+</button>
             <span>点击次数： {value} 次</span> 
             <button className="btn btn-primary" onClick={onreduce}>-</button>
             <p>
               <button className="btn btn-primary" onClick={this.oddAdd}>偶数增加</button>
             </p>
             <p>
             <button className="btn btn-primary" onClick={this.reAdd}>延迟增加</button>
             </p>
         </div>
     )
    }
}
export default Home;