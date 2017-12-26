import React from 'react';

const RingComponent = ({ target, entries }) => (
  <div className='ring'>
    <span>{entries} / {target.toFixed(2)}</span>
  </div>
);

export default RingComponent;
