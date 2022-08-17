
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {

  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/settings">Settings</Link>
      <Switch>
        <Route exact path="/">
          <p>Homepage</p>
        </Route>

        <Route path="/settings">
          <p>Settings</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
