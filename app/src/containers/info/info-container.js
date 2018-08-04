import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';

import { InfoRowComponent } from '../../components/info-row/info-row-component';

class InfoContainer extends Component {

  render() {

    const {
      fetchDone,
      fetchStarted,
      fetchFinished,
      dateStart,
      dateEnd,
      daysSinceStart,
      daysRemaining,
      entries,
      target,
    } = this.props;

    // TODO this wont work
    if (fetchDone && !fetchStarted && fetchFinished) {
      return (
        <Segment inverted className='info-container'>
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
        </Segment>
      );
    }

    return null;
  }
}

const mapStateToProps = ({ status }) => ({
  fetchDone: status.fetchDone,
  fetchStarted: status.fetchStarted,
  fetchFinished: status.fetchFinished,
  dateStart: status.date_start,
  dateEnd: status.date_end,
  daysSinceStart: status.days_since_start,
  daysRemaining: status.days_remaining,
  entries: status.entries,
  target: status.target
});

export default connect(mapStateToProps)(InfoContainer);
