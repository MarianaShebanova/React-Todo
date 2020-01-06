import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute path="/market-page">
        </PrivateRoute>
      </div>
    </Router>
  );
}

export default App;