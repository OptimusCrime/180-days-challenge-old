import React from 'react'
import { Header } from 'semantic-ui-react'

import LoaderComponent from '../../components/loader/loader-component';
import RingComponent from '../ring/ring-component';

const getHeading = (onSchedule) => {
  if (onSchedule) {
    return 'You are ahead!';
  }

  return 'You are behind!';
};

const StatusComponent = ({ fetchStarted, fetchFinished, fetchError, onSchedule, scheduleLimit, entries }) => {

  if (fetchStarted && !fetchFinished) {
    return <LoaderComponent />;
  }

  if (fetchError) {
    return (
      <p>Error</p>
    );
  }

  return (
    <div className={`status-component ${onSchedule ? 'status-component-good' : 'status-component-bad'}`}>
      <Header as='h1'>{getHeading(onSchedule)}</Header>
      <RingComponent
        target={scheduleLimit}
        entries={entries}
      />
    </div>
  );
};

export default StatusComponent;

