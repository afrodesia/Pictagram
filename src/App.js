import React from 'react';
import { Link } from 'react-router'
import './App.css';

const App = React.createClass({
	render(){
		return(
			<div className="App span12">
				<header className="row row-centered">
					<h1>
						<Link to="/">Pictagram</Link>
					</h1>
				</header>
				{React.cloneElement(this.props.children, this.props)}
				
			</div>
		)
	}
})

export default App
