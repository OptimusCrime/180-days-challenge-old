import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Icon, Menu } from 'semantic-ui-react'

import { toggleDisplayModalAuth, toggleDisplayModalEntry, toggleShowGraph } from '../../redux/display/actions'
import { fetchUpdatedStatus } from '../../redux/status/actions'
import { fetchUpdatedEntry } from '../../redux/entry/actions'

const displayMenuItem = (fetchDone, fetchStarted, fetchFinished) => {
  return fetchDone && !fetchStarted && fetchFinished;
};

const getAddOrAuthMenuItem = (fetchDone, fetchStarted, fetchFinished, loggedIn, _toggleDisplayModalAuth, _toggleDisplayModalEntry) => {
  if (displayMenuItem(fetchDone, fetchStarted, fetchFinished)) {
    if (loggedIn) {
      return (
        <Menu.Item
          icon={true}
          onClick={() => _toggleDisplayModalEntry()}
        >
          <Icon name='plus' />
        </Menu.Item>
      );
    }

    return (
      <Menu.Item
        icon={true}
        position='right'
        onClick={() => _toggleDisplayModalAuth()}
      >
        <Icon name='lock' />
      </Menu.Item>
    );
  }

 return null;
};

const getIconForGraphOrList = (showGraph) => {
  if (showGraph) {
    return (
      <Icon name='list' />
    );
  }

  return (
    <Icon name='chart line' />
  );
};

class MenuContainer extends Component {

  constructor(props) {
    super(props);
  }

  handleRefreshPage() {
    this.props.fetchUpdatedStatus();
    this.props.fetchUpdatedEntry();
  }

  render() {

    const {
      fetchDone,
      fetchStarted,
      fetchFinished,
      loggedIn,
      showGraph
    } = this.props;

    return (
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item header className='app-name'>180 days challenge</Menu.Item>
          {fetchDone &&
            <Menu.Item
              icon={true}
              position='right'
              onClick={() => this.props.toggleShowGraph()}
            >
              {getIconForGraphOrList(showGraph)}
            </Menu.Item>
          }
          {getAddOrAuthMenuItem(
            fetchDone,
            fetchStarted,
            fetchFinished,
            loggedIn,
            this.props.toggleDisplayModalAuth,
            this.props.toggleDisplayModalEntry
          )}
          <Menu.Item
            icon={true}
            onClick={() => this.handleRefreshPage()}
            className='menu-refresh'
          >
            <Icon name='refresh' />
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

const mapStateToProps = ({ auth, display }) => ({
  fetchDone: auth.fetchDone,
  fetchStarted: auth.fetchStarted,
  fetchFinished: auth.fetchFinished,
  loggedIn: auth.loggedIn,
  showGraph: display.showGraph
});

const mapDispatchToProps = {
  toggleDisplayModalAuth,
  toggleDisplayModalEntry,
  fetchUpdatedStatus,
  fetchUpdatedEntry,
  toggleShowGraph
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
