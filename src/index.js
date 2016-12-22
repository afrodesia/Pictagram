import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom'

import './index.css';
// Components

// import App from './App';
import Main from './components/Main';
import PhotoLayout from './components/PhotoLayout'
import PhotoSingle from './components/PhotoSingle' 
import { Router, Route, IndexRoute } from 'react-router'

import { Provider } from 'react-redux'
import store, { history } from './store'

const router = (
	<Provider store={ store }>
		<Router history={ history }>
	        <Route path='/' component={Main}>
	            <IndexRoute component={PhotoLayout}></IndexRoute>
	            <Route path='/view/:postId' component={PhotoSingle}></Route>
	        </Route>
    	</Router>
	</Provider>
    
)


render(router,document.getElementById('root'));
  
  

