import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'

import { StatusComponent } from '../../components/status/status-component';

class StatusContainer extends Component {

  render() {

    const {
      fetchDone,
      fetchStarted,
      fetchFinished,
      fetchError,
      onSchedule,
      scheduleLimit,
      entries,
    } = this.props;

    if (!fetchDone) {
      return null;
    }

    return (
      <Container className='status-container top-container'>
        <StatusComponent
          fetchStarted={fetchStarted}
          fetchFinished={fetchFinished}
          fetchError={fetchError}
          onSchedule={onSchedule}
          scheduleLimit={scheduleLimit}
          entries={entries}
        />
      </Container>
    );
  }
}

const mapStateToProps = ({ status }) => ({
  fetchDone: status.fetchDone,
  fetchStarted: status.fetchStarted,
  fetchFinished: status.fetchFinished,
  fetchError: status.fetchError,
  onSchedule: status.on_schedule,
  scheduleLimit: status.schedule_limit,
  entries: status.entries
});

export default connect(mapStateToProps)(StatusContainer);
