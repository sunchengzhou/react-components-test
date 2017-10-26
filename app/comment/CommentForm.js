'use strict'
import React,{Component} from "react";
class CommentForm extends Component{
    addComment(event){
        event.preventDefault();
        let author=this.refs.addauthor.value,
            text=this.refs.addtext.value;
        this.props.onCommentSumbmit({author,text,date:"刚刚"})
    }
    render(){
     return   <div className="ui comments-form">
            <input type="text" placeholder="输入作者" ref="addauthor" />
            <input type="text" placeholder="请输入您的评论" ref="addtext"/>
            <button onClick={this.addComment.bind(this)}>添加评论</button>
        </div>
    }
}
export default CommentForm;
