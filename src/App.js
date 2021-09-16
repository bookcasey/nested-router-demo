
import React, { useState, useEffect } from "react";
import emailData from "./emailData";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import FolderList from "./FolderList"
import MessageListContainer from "./MessageListContainer";
import MessageItemContainer from "./MessageItemContainer";

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

        <Route exact path="/folders">
          <div>
            <div className="row">
              {/* LEFT PANE */}
              <div className="col-2">
                <FolderList folders={folders} />
              </div>

              {/* RIGHT PANE */}
              <div className="col-10">
                <div className="container mt-3">You have {messages.length} messages across {folders.length} folders. Please select a folder to view your messages.</div>
              </div>
            </div>
          </div>
        </Route>

        <Route exact path="/folders/:folderId/messages">
          <div>
            <div className="row">
              {/* LEFT PANE */}
              <div className="col-2">
                <FolderList folders={folders} />
              </div>

              {/* RIGHT PANE */}
              <div className="col-10">
                <MessageListContainer folders={folders} messages={messages} />
              </div>
            </div>
          </div>
        </Route>

        <Route exact path="/folders/:folderId/messages/:messageId">
          <div>
            <div className="row">
              {/* LEFT PANE */}
              <div className="col-2">
                <FolderList folders={folders} />
              </div>

              {/* RIGHT PANE */}
              <div className="col-10">
                <MessageItemContainer folders={folders} messages={messages} />
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
