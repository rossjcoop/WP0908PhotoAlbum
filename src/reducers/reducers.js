

const initialState = {
	albums: [],
	album: {
		photos:[]
	},
	picture: {}
}

export default function (state = initialState, action) {

    switch(action.type){
        case 'GET_ALBUMS':
            return {...state, albums: [action.albums,...state.albums]}
        case 'SELECT_ALBUM':
        	return {...state, album: state.albums.find(album => album.albumId == action.albumId)}
        case 'SELECT_PICTURE':
        	return {...state, picture: state.album.photos.find(album => album.id == action.pictureId)}
        default:
            return state
    }
}