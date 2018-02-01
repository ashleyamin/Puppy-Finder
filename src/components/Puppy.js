import React from 'react';
//functional component
//import React from react
import {Link} from 'react-router-dom';
//react-router-dom package
//includes browser specific tools
//import Link using ES6 destructuring syntax
//instantiate Puppy component
//receives props from Results component when renderPuppies is called
//only returns
//an image, puppy name and a button
//if selected, direct the user to the puppy's profile page

const Puppy = (props) => {
  return (
    <div className="ic-inlist">
      <img src={props.puppy.url} alt={props.puppy.name}/>
      <h3>{props.puppy.name}</h3>
      <Link to={`/breed/${props.puppy.id}`}>Meet{props.puppy.name}</Link>
    </div>
  )
}

export default Puppy;
