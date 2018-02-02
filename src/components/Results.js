import React, {Component} from 'react';
import SingleResult from './SingleResult';

//bring in Component module from react library
//Promise based HTTP client for the browser and node.js
//this is how you make calls from node.js
//transforms request and response data
//transforms JSON

//bring in SingleResult component
//define a class based component
//all class based components must render and return
//Results will display the API data returned from Pet Finder API
//parameters for the query, search by breed and zipcode
//for example, all the Schnauzers in 11209 (brooklyn)
//instantiate Results
//it will inherit all the methods of Component
//call super()
//initialize state
//this component is a child of Search?
//renderPuppies will display all the puppies returned from the search
//iterate through the data returned using array method .map()
//each object within the data will return a Puppy component
//Puppy is a functional component
class Results extends Component {
  constructor (props) {
  super(props);
  this.state = {
    meetPuppy: false,
    puppyData: null,
    puppyList: true,
  }
  this.renderSingleResult = this.renderSingleResult.bind(this);
  }
  renderSingleResult(puppy) {
    this.setState({
      meetPuppy: true,
      puppyData: puppy,
      puppyList: false,
    })
  }
  renderPuppies() {
  console.log(this.props.puppies);
   return this.props.puppies.map((puppy,index) => {
    return (
      <div key={puppy.name.$t} className="testresult">
        <h3>TestResult Div</h3>
        <h3>{puppy.name.$t}</h3>
        <img src={puppy.media.photos.photo[0].$t} />
        <button onClick={() => this.renderSingleResult(puppy)}>Meet {puppy.name.$t}</button>
      </div>
    )
    })
  }
    render() {
      console.log(this.state);
      return (
        <div className='results'>
          {this.state.puppyList ? this.renderPuppies() : ''}
          {this.state.meetPuppy ? <SingleResult puppy={this.state.puppyData} /> : ''}
        </div>
      )
    }
  }

export default Results;
//always export for access
