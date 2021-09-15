import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import emailData from "./emailData";
import FolderList from "./FolderList";
import FolderContent from "./FolderContent";

export default function Main() {
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
    <div>
      <div className="row">
        {/* LEFT PANE */}
        <div className="col-2">
          <Route path={["/folders/:folderId", "/folders"]}>
            <FolderList folders={folders} />
          </Route>
        </div>  

        {/* RIGHT PANE */}
        <div className="col-10">
          <Switch>
            <Route exact path="/folders">
              <div className="container mt-3">You have {messages.length} messages across {folders.length} folders. Please select a folder to view your messages.</div>
            </Route>
            <Route path="/folders/:folderId/messages">
              <FolderContent messages={messages} />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}
