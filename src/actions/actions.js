import store from "../store"
import axios from "axios"


const GET_ALBUMS = 'GET_ALBUMS';
const SELECT_ALBUM = 'SELECT_ALBUM';
const SELECT_PICTURE = 'SELECT_PICTURE'

const url = "https://pixabay.com/api/?key=6435114-c76e3b9f9e1436be5f8ee14bc&image_type=photo&q="


export function getAlbums(term) {
  return axios.get(url + term).then(function(response){

  	function findThumbnail(element) {
  		return element = "previewURL";
	}

  	let thumbnail =	response.data.hits.find(findThumbnail)

      store.dispatch({
        type: GET_ALBUMS,
        albums: {
        	albumName: term,
        	albumId: term.replace(/\s+/g, '').toLowerCase(),
        	thumbnail: thumbnail.previewURL,
        	photos: response.data.hits
        }
      })
    })
  }

export function selectAlbum(albumId) {
	store.dispatch({
		type: SELECT_ALBUM,
		albumId: albumId
	})

}

export function selectPicture(pictureId) {
	store.dispatch({
		type: SELECT_PICTURE,
		pictureId: pictureId
	})
}
