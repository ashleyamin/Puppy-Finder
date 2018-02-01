import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      breed: null,
      zipcode: null,
      redirect: false,
    };
    // bind the functions
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // render each breed option with a photo. placeholder right now.
  renderBreeds() {
    return(
      <div className="wrapper">
          <div className="breeds">
            <img src="#" alt="breed name" />
            <p>BREED NAME</p>
          </div>
          <div className="breeds">
            <img src="#" alt="breed name" />
            <p>BREED NAME</p>
          </div>
          <div className="breeds">
            <img src="#" alt="breed name" />
            <p>BREED NAME</p>
          </div>
          <div className="breeds">
            <img src="#" alt="breed name" />
            <p>BREED NAME</p>
          </div>
          <div className="breeds">
            <img src="#" alt="breed name" />
            <p>BREED NAME</p>
          </div>
          <div className="breeds">
            <img src="#" alt="breed name" />
            <p>BREED NAME</p>
          </div>
          <div className="breeds">
            <img src="#" alt="breed name" />
            <p>BREED NAME</p>
          </div>
          <div className="breeds">
            <img src="#" alt="breed name" />
            <p>BREED NAME</p>
          </div>
          <div className="breeds">
            <img src="#" alt="breed name" />
            <p>BREED NAME</p>
          </div>
          <div className="breeds">
            <img src="#" alt="breed name" />
            <p>BREED NAME</p>
          </div>
          <div className="breeds">
            <img src="#" alt="breed name" />
            <p>BREED NAME</p>
          </div>
          <div className="breeds">
            <img src="#" alt="breed name" />
            <p>BREED NAME</p>
          </div>
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
    this.setState({
      redirect: true,
    })
  }
  //
  render() {
    // redirects to the results page if the form has been submitted
    if (this.state.redirect) {
      return(
        <Redirect to="/breed" />
        )
    }
    // renders the page normally
    return(
      <div className="search">
        {this.renderBreeds}
        <form onSubmit={this.handleSubmit}>
          <label>Select a breed!</label>
          <select name="breed" value={this.state.breed} onChange={this.handleChange}>
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
            <option value="1">5</option>
            <option value="1">6</option>
            <option value="1">7</option>
            <option value="1">8</option>
            <option value="1">9</option>
            <option value="1">10</option>
            <option value="1">11</option>
            <option value="1">12</option>
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
}

export default Search;
