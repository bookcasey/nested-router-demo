import React from "react";
import { Link, useRouteMatch } from 'react-router-dom';

export default function MessageList({ messages }) {
  const { url } = useRouteMatch();
  return (
    <div>
      <h2>MessageList - {messages.length}</h2>
      <ul>
        {messages.map(m => 
          <li key={m.id}>
            <Link to={`${url}/${m.id}`}>{m.subject}</Link>
          </li>)}
      </ul>
    </div>
  );
}