import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DataLayer } from './DataLayer';
import { initialState } from './reducer';
import reducer from './reducer';

const root = createRoot(document.getElementById('root')); // Use createRoot instead of ReactDOM.render
root.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>
);

reportWebVitals();
