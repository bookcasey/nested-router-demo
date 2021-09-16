
import React, { useState, useEffect } from "react";
import emailData from "./emailData";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Home/Homepage";
import Folders from "./Folders/Folders"

function App() {
  const [messages, setMessages] = useState([]);
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const newMessages = [], newFolders = [];
    Object.keys(emailData.messages).forEach(key => newMessages.push(emailData.messages[key]));
    Object.keys(emailData.folders).forEach(key => newFolders.push(emailData.folders[key]));
    setMessages(newMessages);
    setFolders(newFolders);
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route path="/mailboxes">
          <Folders folders={folders} messages={messages} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
