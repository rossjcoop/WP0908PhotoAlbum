import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectPicture } from '../actions/actions'

class AlbumItem extends Component {

	componentWillMount() {
		selectPicture(this.props.match.params.pictureId)
	}


  render() {
    return (
    	<div className="container">
	    		<img src={this.props.picture.webformatURL} />
	    		<br />
	    		<span>Title: {this.props.picture.tags}</span>
	    		<br />
	    		<span>Picture by: {this.props.picture.user}</span>
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