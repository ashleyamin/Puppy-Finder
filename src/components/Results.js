import React, {Component} from 'react';
//bring in Component module from react library
import axios from 'axios';
//Promise based HTTP client for the browser and node.js
//this is how you make calls from node.js
//transforms request and response data
//transforms JSON
import SingleResult from './components/SingleResult';
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
}
 renderPuppies() {
   return this.props.puppies.map(puppy,index => {
   const theId = this.props.puppies[index];
      return(
        <Puppy key={puppy.theId} puppy={puppy} />
        );
      });
    }
    render() {
      return(
        <div className='results'>
        {this.renderPuppies()}
        </div>
      )
    }
  }

export default Results;
//always export for access
