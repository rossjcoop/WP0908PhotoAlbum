import React, { Component } from 'react'
import AlbumItem from './AlbumItem'
import { getAlbums } from '../actions/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class AlbumDirectory extends Component {

	
  render() {
    return (
    	<div className="container">
    		<div className="header">
    			<h1>Fō-tə-graf</h1>
    			<h3>Select a photoalbum...</h3>
    		</div>
    		<div className="album">
    		{this.props.data.map(album => (
    			<div key={album.albumId} className="albumCard">
    				<Link to={"/album/" + album.albumId}>
    					<div className="albumCardInfo">
		    				<img src={album.thumbnail}/>
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