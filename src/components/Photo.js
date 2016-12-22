import React from 'react'
import { Link } from 'react-router'
 
const Photo = React.createClass({
	render(){
		const { post, i } = this.props
		return(
			<figure key={i}>
				<Link to={`/view/${post.code}`}>
					<img src={post.display_src} alt={post.caption} />
 				</Link>
			</figure>
		)
	}
})

export default Photo