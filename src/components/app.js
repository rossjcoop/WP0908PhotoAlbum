import React, { Component } from 'react'
import '../styles/app.css'
import AlbumDirectory from './AlbumDirectory'
import Album from './Album'
import AlbumItem from './AlbumItem'
import { Provider } from 'react-redux'
import store from '../store'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { getAlbums } from '../actions/actions'



class App extends Component {


  componentWillMount(){
    const albumSearches = ["Classic Cars","Japanese Cars", "Muscle Cars", "Toy Cars", "Las Vegas", "France", "Ireland", "Los Angeles", "The Beach"]
    albumSearches.map(i => getAlbums(i))

  }


  render() {
    return (
      <Router>
        <Provider store={store}> 
          <div>    
            <Switch>             
              <Route path="/album/:albumId/:pictureId" component={AlbumItem} />
              <Route path="/album/:albumId" component={Album} />
              <Route exact path="/" component={AlbumDirectory} />
            </Switch> 
          </div>      
        </Provider>
      </Router>
    );
  }
}

export default App;
