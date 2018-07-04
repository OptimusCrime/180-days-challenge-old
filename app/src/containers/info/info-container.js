import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment } from 'semantic-ui-react'

import { InfoComponent } from '../../components/info/info-component';

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
      scheduleLimit
    } = this.props;

    if (fetchDone && !fetchStarted && fetchFinished) {
      return (
        <Segment inverted className='info-container'>
          <InfoComponent
            dateStart={dateStart}
            dateEnd={dateEnd}
            daysSinceStart={daysSinceStart}
            daysRemaining={daysRemaining}
            entries={entries}
            target={target}
            progress={scheduleLimit}
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
  target: status.target,
  scheduleLimit: status.schedule_limit,
});

export default connect(mapStateToProps)(InfoContainer);
