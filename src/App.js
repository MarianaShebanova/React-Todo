import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
      </div>
    </Router>
  );
}

export default App;