import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyProvider from './context/provider';
import Routes from './pages/Routes';

function App() {
  const newHistory = createBrowserHistory();
  return (
    <BrowserRouter history={ newHistory }>
      <MyProvider>
        <div className="meals">
          <Routes />
          <span className="logo">TRYBE</span>
          <object
            className="rocksGlass"
            type="image/svg+xml"
            data={ rockGlass }
          >
            Glass
          </object>
        </div>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
