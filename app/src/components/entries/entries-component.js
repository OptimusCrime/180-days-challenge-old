import React from 'react'

import { formatEntryDate } from "../../utilities";

export const EntriesComponent = ({ entries }) => {
  return (
    <div className='entries'>
      {(entries.map(entry => (
        <div key={entry.id} className='entry'>
          <strong>{formatEntryDate(entry.added)}</strong>
          <p>{entry.comment || <i>No comment</i>}</p>
        </div>
      )))}
    </div>
  );
};
