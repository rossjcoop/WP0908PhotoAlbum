import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectAlbum } from '../actions/actions'
import { Link } from 'react-router-dom'
import SideNav from './AlbumNav'


class Album extends Component {
	static defaultProps = {
		album:{
			photos: [],
			albumName:''
		}
	}


	componentWillMount() {
		selectAlbum(this.props.match.params.albumId)
	}

	
	componentWillReceiveProps(props) {
		selectAlbum(props.match.params.albumId)
	}


  render() {
    return (
    	<div className="container">
    		<div className="navBar">
    			<SideNav />
    		</div>
    		<div className="albumPics"> 
	    		{this.props.album.photos.map(photos => (
	    			<div key={photos.id}>
	    				<Link to={"/album/" + this.props.match.params.albumId + "/" + photos.id}>
		    			<img src={photos.previewURL} />
		    			</Link>
	    			</div>
	    		))}
	    	</div>		
    	</div>     
    )
  }
}


function mapStateToProps(appState) {
	return {

		album: appState.album
	}
}

export default connect(mapStateToProps)(Album)