import React, { Component } from 'react'
import { connect } from 'react-redux'

import { foobar } from '../../redux/display/actions';

class MainContainer extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    props.foobar();
  }

  componentDidMount() {

  }

  render() {

    const {
      name
    } = this.props;

    console.log('name const = ' + name);

    return (
      <p>Derp</p>
    );
  }
}

const mapStateToProps = ({ display }) => ({
  name: display.name
});

console.log(foobar);
console.log(typeof foobar);

const mapDispatchToProps = {
  foobar
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
