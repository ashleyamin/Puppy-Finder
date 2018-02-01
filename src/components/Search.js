// import things
import React, { Component } from 'react';
import axios from 'axios';
import Results from './Results';

// Instantiate the Search class
class Search extends Component {
  constructor() {
    super();
    this.state = {
      breed: '',
      zipcode: '',
      puppiesLoaded: false,
      puppyData: null

    };
    // bind the functions
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.newSearch = this.newSearch.bind(this);
  }
  // render each breed option with a photo. placeholder right now.
  renderSearch() {
    return(
      <div className="searchform">
      {/* Name and photo of each of the breeds you can search for */}
        <div className="wrapper">
          <div className="breeds">
            <img src="#" alt="Poodle" />
            <p>Poodle</p>
          </div>
          <div className="breeds">
            <img src="#" alt="Beagle" />
            <p>Beagle</p>
          </div>
          <div className="breeds">
            <img src="#" alt="Dalmatian" />
            <p>Dalmatian</p>
          </div>
          <div className="breeds">
            <img src="#" alt="Miniature Schnauzer" />
            <p>Miniature Schnauzer</p>
          </div>
          <div className="breeds">
            <img src="#" alt="Husky" />
            <p>Husky</p>
          </div>
          <div className="breeds">
            <img src="#" alt="Labrador Retriever" />
            <p>Labrador Retriever</p>
          </div>
          <div className="breeds">
            <img src="#" alt="Great Dane" />
            <p>Great Dane</p>
          </div>
          <div className="breeds">
            <img src="#" alt="German Shepherd" />
            <p>German Shepherd</p>
          </div>
          <div className="breeds">
            <img src="#" alt="Chihuahua" />
            <p>Chihuahua</p>
          </div>
          <div className="breeds">
            <img src="#" alt="Golden Retriever" />
            <p>Golden Retriever</p>
          </div>
          <div className="breeds">
            <img src="#" alt="Corgi" />
            <p>Corgi</p>
          </div>
          <div className="breeds">
            <img src="#" alt="Shiba Inu" />
            <p>Shiba Inu</p>
          </div>
        </div>
        {/* Form that submits the search parameters to the axios call in this.handleSubmit */}
        <form onSubmit={this.handleSubmit}>
          <label>Select a breed!</label>
          <select name="breed" value={this.state.breed} onChange={this.handleChange}>
            <option value="Poodle">Poodle</option>
            <option value="Beagle">Beagle</option>
            <option value="Dalmatian">Dalmatian</option>
            <option value="Miniature Schnauzer">Miniature Schnauzer</option>
            <option value="Husky">Husky</option>
            <option value="Labrador Retriever">Labrador Retriever</option>
            <option value="Great Dane">Great Dane</option>
            <option value="German Shepherd Dog">German Shepherd</option>
            <option value="Chihuahua">Chihuahua</option>
            <option value="Golden Retriever">Golden Retriever</option>
            <option value="Corgi">Corgi</option>
            <option value="Shiba Inu">Shiba Inu</option>
          </select>
          <input
            type="text"
            name="zipcode"
            placeholder="Zip Code"
            value={this.state.zipcode}
            onChange={this.handleChange}
          />
          <input type="submit" value="SEARCH HOOMAN" />
        </form>
      </div>
    )
  }
  // Changes state based on what the user inputs into the form
  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  }
  // changes the redirect state so the component knows to redirect to the results page
  handleSubmit(event) {
    event.preventDefault();
    // Post to the puppyfinder controller, which will make a get request to the puppy finder API
    // Sends the breed and zipcode to the controller
    axios({
      method: 'POST',
      url: ('/api/puppyfinder'),
      data: {
        breed: this.state.breed,
        zipcode: this.state.zipcode,
      },
    })
    // Gets back the puppy data and sticks it into
    .then(puppyData => {
      this.setState({
        puppiesLoaded: true,
        puppyData: puppyData,
      })
    })
    .catch(err => {
      console.log('puppyfinder call error', err);
    })
  }
  // Changes state back to what it is when the page loads,
  newSearch() {
    this.setState({
      puppiesLoaded: false,
      puppyData: null,
    });
  }
  render() {
    // renders the page normally
    return(
      <div className="search">
        {/* Conditional rendering. If we loaded data from the puppy finder API the Results component will render.
            We're passing down the data we got from the back-end as props for results to render.
            If there's no data from the API the search form will render.
            The button has an onCLick event to have a new search by resetting state */}
          <h1>Hello mates..!</h1>
        {(this.state.puppiesLoaded) ?
        (<Results puppies={this.state.puppyData} />,
        <button onClick={this.newSearch}>New Search</button>) :
        this.renderSearch() }

      </div>
      )
  }
}

export default Search;
