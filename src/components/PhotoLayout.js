import React from 'react';

import Photo from './Photo'

const PhotoLayout = React.createClass({
	render(){
		return(
			<div className="PhotoLayout">
				<div className="row">

				    <div className="col-md-4">
				    	{this.props.posts.map((post, i) => <Photo />)}
				    </div>

				 </div>
			</div>
		)
	}
})

export default PhotoLayout