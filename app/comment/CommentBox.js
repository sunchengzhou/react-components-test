'use strict'
import React,{Component} from "react";
import CommentForm from "./CommentForm"
import Comment from "./comment"
class CommentBox extends Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.data
        }
    }
    handleCommentSubmit(comment){
        let comments=this.state.data,
            newComments=comments.concat(comment);
        console.log(comments);
        console.log(newComments)
        this.setState({data:newComments});
    }
    render(){
    let commentNodes=this.state.data.map((comment,index)=>{
        return (
            <Comment key={index} author={comment.author} date={comment.date} text={comment.text}/>
        );
    })
     return   <div className="ui comments">
            <h1>评论</h1>
            <div className="ui divider">
                {commentNodes}
                <CommentForm onCommentSumbmit={this.handleCommentSubmit.bind(this)}/>
            </div>
        </div>
    }
}
export default CommentBox;