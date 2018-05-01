import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'

import GraphComponent from '../../components/graph/graph-component'

class GraphContainer extends Component {

  render() {

    const {
      statusFetched,
      entriesFetched,

      entries,
      date_start,
      days_since_start,
      tick
    } = this.props;

    if (!statusFetched || !entriesFetched) {
      return null;
    }

    return (
      <Container className='graph-container top-container'>
       <GraphComponent
         entries={entries}
         date_start={date_start}
         days_since_start={days_since_start}
         tick={tick}
       />
      </Container>
    );
  }
}

const mapStateToProps = ({ status, entry }) => ({
  statusFetched: status.fetchFinished,
  entriesFetched: entry.fetchFinished,

  date_start: status.date_start,
  days_since_start: status.days_since_start,
  tick: status.tick,

  entries: entry.entries,
});

export default connect(mapStateToProps)(GraphContainer);
