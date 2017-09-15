import React, { Component } from 'react'
import AlbumItem from './AlbumItem'
import { getAlbums } from '../actions/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class AlbumDirectory extends Component {
	

  render() {
    return (
    	<div className="container">
    		<div className="album">
    		{this.props.data.map(album => (
    			<div key={album.albumId}>
    				<Link to={"/album/" + album.albumId}>
    					<div>
		    				<img src={album.thumbnail}/>
		    				<span>{album.albumName}</span>
		    				<input type="hidden" value={album.albumId} name="albumId" />
		    			</div>
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
		data: appState.albums
	}
}


export default connect(mapStateToProps)(AlbumDirectory)