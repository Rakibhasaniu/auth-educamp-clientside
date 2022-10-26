import React from 'react';

const DisplayDetails = ({ti}) => {
    return (
        <div className="card w-96 bg-base-100  shadow-xl">
  <figure><img src={ti.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{ti.title}</h2>
    <p>{ti.details}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
    );
};

export default DisplayDetails;