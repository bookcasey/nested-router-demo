import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Main from "./Main";


function App() {
  return (
    <Router>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/folders">
        <Main />
      </Route>
    </Router>
  );
}

export default App;
