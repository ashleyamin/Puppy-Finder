import React, {Component} from 'react';

class Favorites extends Component {
  constructor () {
    super();
    this.state = {
      dataLoaded: false,
      favoritesList: null,
      opinion: null,
    }
  }

//makes the api call to the local database
  componentDidMount () {
    axios.get ('/somewhere')
    .then(res => {
      this.setState({
        dataLoaded: true,
        favoritesList: res.data.data,
        opinion: null,
      })
    })
  }

//shows each favorite on the favorites page
  showFavorites () {

  }

  render() {
    return(
      <div className='favorites'>
        <h1>All of my favorite puppies</h1>
        {this.showFavorites()}
      </div>
      )
  }

}

export default Favorites;
