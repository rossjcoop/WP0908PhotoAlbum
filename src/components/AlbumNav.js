import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class SideNav extends Component {
  render() {
    return (
    	<div className="nav">
    		{this.props.albums.map(album => (
    			<div key={album.albumId}>
    				<NavLink to={"/album/" + album.albumId}>
    					<div>
		    				<span>{album.albumName}</span>
		    			</div>
		    		</NavLink>
    			</div>
    		))}
    	</div>     
    )
  }
}

function mapStateToProps(appState) {
	return {
		albums:appState.albums
	}
}

export default connect(mapStateToProps)(SideNav)