import React from 'react'

const InfoRowComponent = ({ label, text }) => {
  return (
    <div className='info-row'>
      <div className='info-label'>
        <p>{label}</p>
      </div>
      <div className='info-value'>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default InfoRowComponent;

