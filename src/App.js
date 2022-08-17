import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Users from './Users'
import UserProfile from './UserProfile';
import UserPosts from './UserPosts';
import UserNav from './UserNav';

function App() {

  return (
    <Router>
      <div className='container m-2'>
        <ul className="nav nav-pills nav-justified">
          <li className="nav-item">
            <NavLink to="/" exact className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/users" className="nav-link">Users</NavLink>
          </li>
        </ul>

        <hr />

        <div className='row'>
          <Switch>
            <Route exact path="/">
              <h1>Homepage</h1>
            </Route>

            <Route path="/about">
              <h1>About</h1>
            </Route>

            <Route exact path="/users">
              <Users />
            </Route>

            <Route exact path="/users/:userId">
              <UserNav />
              <UserProfile />
            </Route>

            <Route path="/users/:userId/posts">
              <UserNav />
              <UserPosts />
            </Route>

            <Route>
              <p>Not found</p>
            </Route>
          </Switch>
        </div>
      </div>
    </Router >
  );
}

export default App;
