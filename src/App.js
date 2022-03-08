import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './context/Provider';
import Routes from './pages/Routes';
import './App.css';

function App() {
  const newHistory = createBrowserHistory();
  return (
    <Router history={ newHistory }>
      <Provider>
        <Routes />
      </Provider>
    </Router>
  );
}

export default App;
