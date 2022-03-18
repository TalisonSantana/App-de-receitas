import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyProvider from './context/Provider';
import Routes from './pages/routes/Routes';
import './App.css';

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
