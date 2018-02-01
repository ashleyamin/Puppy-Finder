import React from 'react';
import { Link } from 'react-router-dom';

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
