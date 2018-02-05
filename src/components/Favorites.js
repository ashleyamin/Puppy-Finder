// import react, axios, and favorite.js
import React, {Component} from 'react';
import axios from 'axios';
import Favorite from './Favorite';

class Favorites extends Component {
  constructor () {
    super();
    this.state = {
      dataLoaded: false,
      favoritesData: null,
      opinionsData: null,
    }
  }

//makes the api call to the local database for both tables simultaneously
//http://codeheaven.io/how-to-use-axios-as-your-http-client/
//let favorites = puppy.data.concat(opinion.data);
  componentDidMount () {
    axios.all ([
      axios.get('/api/puppy'),
      axios.get('/api/opinions')
      ])
    .then(axios.spread((puppies, opinions) => {
      this.setState({
        dataLoaded: true,
        favoritesData: puppies.data.data,
        opinionsData: opinions.data.data,
      })
    }))
    .catch(err => {
      console.log('inside favorites list err', err);
    })
  }

//shows each favorite on the favorites page
  showFavorites () {
    if(this.state.dataLoaded) {
      return this.state.favoritesData.map(favorite => {
        return (
          <Favorite key={favorite.id} favorite={favorite} />
          )
      })
    } else return (
      <h3>I'm sorry, we can't seem to find any dogs saved. Maybe you could add one?</h3>
      )
  }

//render function that calls the showFavorites function
  render() {
    console.log('STATE HAS BEEN CALCULATED TO BE', this.state)
    return(
      <div className='favorite-list'>
        <div className='wrapper'> {this.showFavorites()} </div>
      </div>
    )
  }

}

export default Favorites;
