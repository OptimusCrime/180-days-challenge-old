import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Icon, Menu } from 'semantic-ui-react'

import { toggleDisplayModalAuth, toggleDisplayModalEntry } from '../../redux/display/actions'
import { fetchUpdatedStatus } from '../../redux/status/actions'
import { fetchUpdatedEntry } from '../../redux/entry/actions'

const displayMenuItem = (fetchDone, fetchStarted, fetchFinished) => {
  return fetchDone && !fetchStarted && fetchFinished;
};

const getMenuItem = (fetchDone, fetchStarted, fetchFinished, status, _toggleDisplayModalAuth, _toggleDisplayModalEntry) => {
  if (displayMenuItem(fetchDone, fetchStarted, fetchFinished)) {
    if (status) {
      return (
        <Menu.Item
          icon={true}
          position='right'
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
      status
    } = this.props;

    return (
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item header className='app-name'>180 days challenge</Menu.Item>
          {getMenuItem(
            fetchDone,
            fetchStarted,
            fetchFinished,
            status,
            this.props.toggleDisplayModalAuth,
            this.props.toggleDisplayModalEntry
          )}
          <Menu.Item
            icon={true}
            position={displayMenuItem(fetchDone, fetchStarted, fetchFinished) ?  null : 'right'}
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

const mapStateToProps = ({ auth }) => ({
  fetchDone: auth.fetchDone,
  fetchStarted: auth.fetchStarted,
  fetchFinished: auth.fetchFinished,
  status: auth.status,
});

const mapDispatchToProps = {
  toggleDisplayModalAuth,
  toggleDisplayModalEntry,
  fetchUpdatedStatus,
  fetchUpdatedEntry
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
