import React from 'react'

const EntriesComponent = ({ entries }) => {
  return (
    <div className='entries'>
      {(entries.map(entry => (
        <div key={entry.id} className='entries--entry'>
          <strong>{entry.added}</strong>
          <p>{entry.comment ? entry.comment : <i>No comment</i>}</p>
        </div>
      )))}
    </div>
  );
};

export default EntriesComponent;

