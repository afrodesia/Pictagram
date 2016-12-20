import React from 'react';
import { Link } from 'react-router'
import './App.css';

const App = React.createClass({
	render(){
		return(
			<div className="App">
				<section className="row row-centered">
					<header>
						<h1>
							<Link to="/">Pictagram</Link>
						</h1>
					</header>
				</section>

				<section className="container App-cont">
					{React.cloneElement(this.props.children, this.props)}
				</section>				
			</div>
		)
	}
})

export default App
