import React from 'react'
import InfoRowComponent from "../info-row/info-row-component";

const InfoComponent = ({ dateStart, dateEnd, daysSinceStart, daysRemaining, entries, target, progress }) => {

  return (
    <div>
      <InfoRowComponent
        label='Days since start'
        text={daysSinceStart}
      />
      <InfoRowComponent
        label='Days remaining'
        text={daysRemaining}
      />
      <InfoRowComponent
        label='Entries'
        text={entries}
      />
      <InfoRowComponent
        label='Target'
        text={target}
      />
      <InfoRowComponent
        label='Progress'
        text={progress.toFixed(2)}
      />
      <InfoRowComponent
        label='Challenge started'
        text={dateStart}
      />
      <InfoRowComponent
        label='Challenge end'
        text={dateEnd}
      />
    </div>
  );
};

export default InfoComponent;

