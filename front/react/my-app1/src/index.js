import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    hashHistory,Switch,HashRouter
} from 'react-router-dom'
import BasicExample from './BasicExample'

ReactDOM.render(<HashRouter><BasicExample/></HashRouter>,
  document.getElementById('root')
);
