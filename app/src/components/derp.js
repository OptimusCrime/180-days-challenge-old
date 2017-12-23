import React, { Component } from 'react';

import { Button } from 'semantic-ui-react'

const ButtonExampleButton = () => (
  <Button>Click Here</Button>
);

class Derp extends Component {
  render() {
    return (
      <div>
        <ButtonExampleButton />
      </div>
    );
  }
}

export default Derp;
