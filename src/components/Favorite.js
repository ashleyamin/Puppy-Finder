// import react, and link
import React from 'react';
import { Link } from 'react-router-dom';

// renders the image, name and edit button on the favorites page
const Favorite = (props) => {
  return (
      <div className='favorite'>
        <img src={props.favorite.photourl} />
        <h2>{props.favorite.name}</h2>
        <Link to={`/puppy/${props.favorite.id}`}>Edit</Link>
      </div>
  )
}

export default Favorite;
