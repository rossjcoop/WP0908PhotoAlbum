import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectPicture } from '../actions/actions'
import { Link } from 'react-router-dom'

class AlbumItem extends Component {

	componentWillMount() {
		selectPicture(this.props.match.params.pictureId)
	}


  render() {
    return (
    	<div className="container">
    		<div>
    			<Link to={"/album/" + this.props.match.params.albumId}>Back</Link>
	    		<img src={this.props.picture.webformatURL} />
	    		<br />
	    		<span>Title: {this.props.picture.tags}</span>
	    		<br />
	    		<span>Picture by: {this.props.picture.user}</span>
	    	</div>
    	</div>     
    )
  }
}

function mapStateToProps(appState) {
	console.log("picture appState", appState.picture)
	return {
		picture: appState.picture
	}
}

export default connect(mapStateToProps)(AlbumItem)