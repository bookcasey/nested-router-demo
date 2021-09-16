import React from "react";
import { Link, useRouteMatch } from 'react-router-dom';

export default function MessageList({ folderName = "Folder Name", messages = [] }) {
  const { url } = useRouteMatch();
  return (
    <ul>
      {messages.map(m => 
        <li key={m.id}>
          <Link to={`${url}/${m.id}`}>{m.subject}</Link>
        </li>)}
    </ul>
  );
}