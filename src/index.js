import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom'

import './index.css';

import App from './App';
// import Main from './components/Main'
import PhotoLayout from './components/PhotoLayout'
import PhotoSingle from './components/PhotoSingle' 
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const router = (
    <Router history={ browserHistory }>
        <Route path='/' component={App}>
            <IndexRoute component={PhotoLayout}></IndexRoute>
            <Route path='/view/:postId' component={PhotoSingle}></Route>
        </Route>
    </Router>
)


render(router,document.getElementById('root'));
  
  

