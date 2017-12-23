import React from "react";
import ReactDOM from "react-dom";

import './style.less';

import Derp from './Components/derp';


const render = () => {
  ReactDOM.render(
    <Derp />,
    document.getElementById('app')
  )
};

render();
