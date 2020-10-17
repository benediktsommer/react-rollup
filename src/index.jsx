import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './Components/App';
import { CinemaContext } from './Components/Context/cinemaContext';

ReactDOM.render(
  <CinemaContext>
    <App />
  </CinemaContext>,
  document.getElementById('root')
);
