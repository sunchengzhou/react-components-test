import React from "react";
import {render} from "react-dom";
import Home from './home/home.jsx';
import { createStore } from 'redux';
import counter from './reducers';

export const store = createStore(counter);
import "./main.css";

store.subscribe( render(<Home />,document.getElementById('root')))
