import React from 'react';
import Photo from './Photo'

const PhotoLayout = React.createClass({
	handleSubmit(e){
		e.preventDefault()
		this.props.addItem(this.refs.item.value)
	},
	render(){

		return(
			<div className="PhotoLayout">
				<div className="row">

				    <div className="">
				    	{this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} /> )}
				    </div>

				 </div>
			</div>
		)
	}
})

export default PhotoLayout