import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment } from 'semantic-ui-react'

import EntriesComponent from '../../components/entries/entries-component';

class EntryContainer extends Component {

  render() {

    const {
      fetchDone,
      fetchStarted,
      fetchFinished,
      entries
    } = this.props;

    if (fetchDone && !fetchStarted && fetchFinished) {
      return (
        <Segment className='entry-container'>
          <EntriesComponent
            entries={entries}
          />
        </Segment>
      );
    }

    return null;
  }
}

const mapStateToProps = ({ entry }) => ({
  fetchDone: entry.fetchDone,
  fetchStarted: entry.fetchStarted,
  fetchFinished: entry.fetchFinished,
  entries: entry.entries,
});

export default connect(mapStateToProps)(EntryContainer);
