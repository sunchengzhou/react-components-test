'use strict'
import React,{Component} from "react";
import { store } from '../main';
class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
          data:store.getState()
        }
    }
    componentDidMount() {
      this.initData();
    }
    initData() {
      store.dispatch({type:'INITIAL'})
    }
    render(){
      console.log(this.state)
      const [ name, charm, money ] = this.state[0]
     return  (
         <div className="container home">
            姓名：{ name }
            职位：{ charm }
            金钱：{ money }
         </div>
     )
    }
}
export default Home;