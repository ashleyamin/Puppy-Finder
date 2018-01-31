import React, {Component} from 'react';

class Favorites extends Component {
  constructor () {
    super();
    this.state = {
      dataLoaded: false,
      favoritesList: null,
    }
  }
//do we need the opinion variable in state?

//makes the api call to the local database
  componentDidMount () {
    axios.get ('/somewhere')
    .then(res => {
      this.setState({
        dataLoaded: true,
        favoritesList: res.data.data,
      })
    })
  }

//shows each favorite on the favorites page
  showFavorites () {
    if(this.state.dataLoaded) {
      return this.state.favoritesList.map(favorites => {
        return (
          <div className='favorites-list'>
            <p>image placeholder</p>
            <h2>title</h2>
          </div>
          )
      })
    }
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
