import React from "react";

export default function MessageItem({ message }) {
  return (
    <div>
      <h3>{message.subject}</h3>
      <div className="row">
        <div className="col-1">
          <span className="font-weight-bold">From:</span>
        </div>
        <div className="col-4">
          <span>{message.from}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-1">
          <span className="font-weight-bold">To:</span>
        </div>
        <div className="col-4">
          <span>{message.to}</span>
        </div>
      </div>
    </div>
  );
}