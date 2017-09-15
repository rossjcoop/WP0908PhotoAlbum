import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectPicture } from '../actions/actions'
import { NavLink } from 'react-router-dom'


class AlbumItem extends Component {

	componentWillMount() {
		selectPicture(this.props.match.params.pictureId)
	}



  render() {
    return (
    	<div className="container">
    		<div className="header">
	    		<NavLink to={"/album/" + this.props.match.params.albumId}style={{ textDecoration: 'none' }}>
	    			<div className="navButton">
	    				<span className="link">Return to Album</span>
	    			</div>
	    		</NavLink>
    		</div>
    		<br />
    		<div className="photoView">
	    		<img src={this.props.picture.webformatURL} alt="Selected Picture" />
	    		<br />
	    		<h3>Tags: {this.props.picture.tags}</h3>
	    		<h3>Views: {this.props.picture.views}</h3>
	    		<div className="creditBar">
	    			<a href={"https://pixabay.com/en/users/"+this.props.picture.user+"-"+this.props.picture.user_id} target="blank">
	    			<div className="profilePic">
	    				<img src={this.props.picture.userImageURL} alt="user picture" height="75" />
	    			</div>
	    			</a>
	    			<div>
	    				<span>Photo by: </span>
	    				<br />
	    				<span>{this.props.picture.user}</span>
	    				<br />
	    				<a href="https://pixabay.com" target="blank">
	    					<img src="/images/pixabaylogo.png" alt="pixabaylogo" height="15" />
	    				</a>
	    			</div>
	    		</div>
	    	</div>
    	</div>     
    )
  }
}

function mapStateToProps(appState) {
	console.log("picture appState", appState.picture)
	console.log("album appState", appState.album)
	console.log("total appState", appState.albums)
	return {
		picture: appState.picture
	}
}

export default connect(mapStateToProps)(AlbumItem)