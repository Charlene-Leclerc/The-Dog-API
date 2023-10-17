import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Provider } from '@lyket/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider apiKey="pt_088609552b02b98aea5028e205174a">
    <App />
  </Provider>
);

