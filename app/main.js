import React from "react";
import {render} from "react-dom";
import Home from './home/home.jsx';
import { createStore } from 'redux';
import counter from './reducers';

const store = createStore(counter);

import "./main.css";
var renderHtml = () => {render(<Home 
    store={store}
    value={store.getState().toString()}
    onadd = {() => {store.dispatch({
        type: 'ADD'
    })}}
    onreduce = {() => {store.dispatch({
        type: 'REDUCE'
    })}}
    />,document.getElementById('root'))};
renderHtml();
store.subscribe(renderHtml);
