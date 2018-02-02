import React, { Component } from 'react';
//bring in React
//bring in Component from react
import axios from 'axios';
//Promise based HTTP client for the browser and node.js
//this is how you make calls from node.js
//transforms request and response data
//transforms JSON
import {Link, Redirect} from 'react-router-dom';
//react-router-dom package
//includes browser specific tools
//import Link using ES6 destructuring syntax
//import Redirect
//declare SingleResult component
//class based component
//must render and return
//instantiate, call super()
//inherits from Component
//initialize state
//bind addPuppy method to preserve 'this'

class SingleResult extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.puppy.name.$t,
      breed: this.props.puppy.breeds.breed.$t,
      photourl: this.props.puppy.media.photos.photo[0].$t,
      sex: this.props.puppy.sex.$t,
      description: this.props.puppy.description.$t,
      // altered: this.props.puppy.altered,
      // housetrained: this.props.puppy.housetrained,
      // shelternumber: this.props.puppy.shelternumber,
      fireRedirect: false
    }
    this.addPuppy = this.addPuppy.bind(this)
   }

  addPuppy() {
    axios.post('/api/puppy', {
      name: this.state.name,
      breed: this.state.breed,
      photourl: this.state.photourl,
      sex: this.state.sex,
      description: this.state.description,
      // altered: this.props.puppy.altered,
      // housetrained: this.props.puppy.housetrained,
      // shelternumber: this.props.puppy.shelternumber,
      // notes: this.props.puppy.notes,
   })
  .then(res => {
    console.log('successfully posted puppy :)', res)
    //   this.setState({
    //     fireRedirect: true
    // })
  }).catch(err => { console.log(err)})
}

//once the page has loaded, in the JSX, call renderFetchPuppy
//display the puppy profile selected

  renderFetchPuppy(){
      return(
        <div className='inner'>
          <div className='img'>
            <img src={this.state.photourl} alt={this.state.name}/>
          </div>
          <div className='info'>
            <h4 className='breed'>{this.state.breed}</h4>
            <h1>My name is {this.state.name}</h1>
            <p>{this.state.description}</p>
            <p>Sex: {this.state.sex}</p>
            {/* <p>{this.state.altered}</p>
            <p>{this.state.housetrained}</p>
            <p>{this.state.shelternumber}</p> */}
            <div className='links'>
              <button onClick={this.addPuppy}>Save {this.state.name}</button>
            </div>
          </div>
        </div>
      )
  }
//all class based components must render and return
//this calls renderFetchPuppy
//execute when page has loaded
   render(){
    console.log('rendering singleresult');
     return(
       <div className="singleresult">
       {this.renderFetchPuppy()}
       </div>
      )
   }
}


export default SingleResult;
//always export for access
