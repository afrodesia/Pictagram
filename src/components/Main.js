import React from 'react';
import { Link } from 'react-router'
import PhotoSingle from './PhotoSingle'

const Main = React.createClass({
	render(){
		return(
			<div className="Main span12">
				<header className="pagination-centered ">
					<h1>
						<Link to="/">Pictagram</Link>
					</h1>
				</header>
				<PhotoSingle />
			</div>
		)
	}
})

export default Main