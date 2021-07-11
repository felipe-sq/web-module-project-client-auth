import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Image } from 'react-bootstrap';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const logout = () => {
    localStorage.removeItem("token");
    console.log("You have been logged out!");
  };

  return (
    <Router>
      <div className="App">
        <Image variant="top" src="../Friends-logo.jpg" alt="Friends Title Image"/>
        <h2>View, Track and Update Your Bestest Friends!</h2>
        <ul style={{ display: "flex", justifyContent: "center"}}>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
          <li>
            <Link to="/protected">Friends List</Link>
          </li>
          <li>
            <Link to="/protected/addfriend">Add Friend</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <PrivateRoute exact path="/protected/addfriend" component={FriendForm} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
