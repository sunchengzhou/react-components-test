import React from "react";
import {render} from "react-dom";
import CommentBox from "./comment/CommentBox";
import "./main.css";
var comments=[
    {"author":"王浩","date":"5分钟前","text":"天气不错呢"},
    {"author":"张超","date":"2分钟前","text":"哇卡卡卡呢"}
]
render(<CommentBox data={comments}/>,document.getElementById('root'));