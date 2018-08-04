import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';

import { RingComponent } from '../../../components/ring/ring-component';

class StatusInnerContainer extends Component {

  render() {
    const {
      fetchStarted,
      fetchFinished,
      fetchError,
      statuses,
      currentChallenge
    } = this.props;

    if (fetchStarted && !fetchFinished) {
      return (
        <div className="ui segment">
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading</div>
          </div>
        </div>
      );
    }

    if (fetchError) {
      return <p>Error</p>;
    }

    const currentStatus = statuses.find(status => status.identifier === currentChallenge);

    // TODO check if finished

    const {
      entries
    } = currentStatus;

    const {
      on_schedule,
      schedule_limit,
    } = currentStatus.progress;

    return (
      <div className={`status-component ${on_schedule ? 'status-component-good' : 'status-component-bad'}`}>
        <Header as='h1'>{on_schedule ? 'You are ahead!' : 'You are behind'}</Header>
        <RingComponent
          target={schedule_limit}
          entries={entries}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ status, display }) => ({
  fetchStarted: status.fetchStarted,
  fetchFinished: status.fetchFinished,
  fetchError: status.fetchError,
  statuses: status.statuses,
  currentChallenge: display.currentChallenge,
});

export default connect(mapStateToProps)(StatusInnerContainer);
