'use strict'
import React,{Component} from "react";
class Comment extends Component{
    render(){
     return   <div className="ui comment">
         <div className="content">
             <p>
                <span className="author">{this.props.author}</span>
                <span className="date">{this.props.date}</span>                 
             </p>
            <p>
             <span className="comcont">{this.props.text}</span>                
            </p>
             </div>
        </div>
    }
}
export default Comment;