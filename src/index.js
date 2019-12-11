import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Game from './game';

// ========================================

// React on the render event
// Render the Game component into the root element in the document
ReactDOM.render(
  <Game/>,
  document.getElementById('root')
);

