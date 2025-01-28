import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from "./serviceWorker"; 

import { GifExpertApp } from './GifExpertApp';

import './index.css';

ReactDOM.render(
  <GifExpertApp />,
  document.getElementById('root')
);

serviceWorker.register();