import React from 'react';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing the Bootstrap CSS
import { createRoot } from 'react-dom/client';
import { store } from './store/store';
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container);
async function start() {
  root.render(
    <Provider store={store}>
      <App tab="home" />
    </Provider>
  );
}
start()