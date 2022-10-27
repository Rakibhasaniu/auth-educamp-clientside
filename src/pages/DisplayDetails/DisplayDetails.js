import React from 'react';
import { Link } from 'react-router-dom';

const DisplayDetails = ({ti}) => {
    return (
        <div className="card  bg-base-100  shadow-xl">
  <figure><img src={ti.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{ti.title}</h2>
    <p>{ti.details.slice(0, 150) + '...'}</p>
    <Link to={`/categories/${ti.id}`} >Deatils</Link>
    
  </div>
</div>
    );
};

export default DisplayDetails;