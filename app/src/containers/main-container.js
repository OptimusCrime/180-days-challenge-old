import React, { Component } from 'react'
import { connect } from 'react-redux'

import EntryContainer from './entry/entry-container';
import InfoContainer from './info/info-container';
import MenuContainer from './menu/menu-container';
import ModalAuthContainer from './modal-auth/modal-auth-container';
import ModalEntryContainer from './modal-entry/modal-entry-container';
import StatusContainer from './status/status-container';
import GraphContainer from './graph/graph-container';

import { fetchAuth } from '../redux/auth/actions';
import { fetchInitialEntry } from '../redux/entry/actions';
import { fetchInitialStatus } from '../redux/status/actions';

const getMainBodyContainers = (showGraph) => {
  if (showGraph) {
    return (
      <GraphContainer />
    );
  }

  return (
    <div>
      <StatusContainer />
      <InfoContainer />
      <EntryContainer />
    </div>
  );
};

class MainContainer extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAuth();
    this.props.fetchInitialStatus();
    this.props.fetchInitialEntry();
  }

  render() {

    const {
      showModalAuth,
      showModalEntry,
      showGraph
    } = this.props;

    return (
      <div>
        {showModalAuth && <ModalAuthContainer />}
        {showModalEntry && <ModalEntryContainer />}
        <MenuContainer />
        {getMainBodyContainers(showGraph)}
      </div>
    );
  }
}

const mapStateToProps = ({ display }) => ({
  showModalAuth: display.showModalAuth,
  showModalEntry: display.showModalEntry,
  showGraph: display.showGraph
});

const mapDispatchToProps = {
  fetchAuth,
  fetchInitialStatus,
  fetchInitialEntry,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
