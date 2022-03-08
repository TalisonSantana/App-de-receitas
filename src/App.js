import React from 'react';
// import rockGlass from './images/rockGlass.svg';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MyProvider from './context/provider';
import Routes from './pages/Routes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const newHistory = createBrowserHistory();
  return (
    <Router history={ newHistory }>
      <MyProvider>
        <Routes />
      </MyProvider>
    </Router>
  );
}

export default App;
