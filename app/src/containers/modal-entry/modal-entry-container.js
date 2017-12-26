import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Header, Icon, Modal, Input } from 'semantic-ui-react'

import { toggleDisplayModalEntry, updateEntryValue } from '../../redux/display/actions';
import { updateEntry } from '../../redux/entry/actions';

const ENTER_BUTTON = 13;

class ModalEntryContainer extends Component {

  constructor(props) {
    super(props);
  }

  handleKeyDown(event) {
    if (event.keyCode === ENTER_BUTTON) {
      return this.props.updateEntry(event.target.value);
    }
  }

  render() {

    const {
      entryComment,
      updateStarted,
      updateFailed
    } = this.props;

    return (
      <Modal
        open={true}
        onClose={() => this.props.toggleDisplayModalEntry()}
        size='small'
        className='modal-container modal-auth-container'
      >
        <Header icon='lock' content='Add entry' />
        <Modal.Content>
          <Input
            placeholder='Climbing'
            loading={updateStarted}
            value={entryComment}
            onKeyUp={(e) => this.handleKeyDown(e)}
            onChange={(e) => this.props.updateEntryValue(e.target.value)}
            disabled={updateStarted}
          />
          {updateFailed && <p className='modal-incorrect-password'>Something went wrong. Try again.</p>}
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={() => this.props.toggleDisplayModalEntry()} inverted>
            <Icon name='cancel' /> Cancel
          </Button>
          <Button color='green' onClick={() => this.props.updateEntry(entryComment)} inverted>
            <Icon name='checkmark' /> Post
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapStateToProps = ({ display, entry }) => ({
  entryComment: display.entryComment,
  updateStarted: entry.updateStarted,
  updateFailed: entry.updateFailed
});

const mapDispatchToProps = {
  toggleDisplayModalEntry,
  updateEntryValue,
  updateEntry
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEntryContainer);
