'use strict'
import React,{Component, createContext} from "react";
const CountContext = createContext();

class Customer extends Component {
    render() {
        return (
           <CountContext.Consumer>
               {
                   count => <p>{count}</p>
               }
           </CountContext.Consumer>
        )
    }
}
class Middle extends Component{
    render(){
     return   (<div className="middle">
           i am middler, i do nothing but insert customer!
           <Customer />
        </div>)
    }
}
class App extends Component{
    constructor() {
        super();
        this.state = {
            count: 50
        }
        this.countAdd = this.countAdd.bind(this)
    }
    countAdd() {
        console.log('urnning')
        const {count} = this.state;
        this.setState({
            count: count + 1
        })
    }
    render(){
     const { count } = this.state;
     return   <div className="app">
           <CountContext.Provider value={count}>
                <Middle />
                <button onClick={this.countAdd}>
                    点我续命
                </button>
            </CountContext.Provider>
        </div>
    }
}
export default App;