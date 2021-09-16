import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import FolderList from "./FolderList";
import MessageListContainer from "./MessageListContainer";
import MessageItemContainer from "./MessageItemContainer";

export default function Folders({ folders, messages }) {
  const { url } = useRouteMatch();

  return (
    <div>
      <div className="row">
        {/* LEFT PANE */}
        <div className="col-2">
          <FolderList folders={folders} />
        </div>

        {/* RIGHT PANE */}
        <div className="col-10">
          <Switch>
            <Route exact path={url}>
              <div className="container mt-3">You have {messages.length} messages across {folders.length} folders. Please select a folder to view your messages.</div>
            </Route>

            <Route exact path={`${url}/:folderId/messages`}>
              <MessageListContainer folders={folders} messages={messages} />
            </Route>

            <Route exact path={`${url}/:folderId/messages/:messageId`}>
              <MessageItemContainer folders={folders} messages={messages} />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}
