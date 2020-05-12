import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Dreamers from './pages/Dreamers';
import Login from './pages//Login';
import Register from './pages/Register';
import Investors from './pages/Investors';
import PrivateRoute from './Auth/PrivateRoute';

function App() {
  return (
    <Router>
      <header className="header">
        <h1>VR Funding</h1>
      </header>
      <Route path="/" exact component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/dreamers" component={Dreamers} />
      <PrivateRoute exact path="/investors" component={Investors} />
    </Router>
  );
}

export default App;
