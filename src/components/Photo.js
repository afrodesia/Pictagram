import React from 'react'
import { Link } from 'react-router'
 
const Photo = React.createClass({
	render(){
		const { post, i } = this.props
		return(
			<section className="col-md-4">
				<figure key={i} className="">
					<Link to={`/view/${post.code}`}>
						<img src={post.display_src} alt={post.caption} />
	 				</Link>
				</figure>
			</section>
		)
	}
})

export default Photo