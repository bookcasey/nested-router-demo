import React from "react"
import { useParams } from "react-router-dom";
import MessageItem from "./MessageItem"

export default function MessageContainer({ folders = [], messages = [] }) {
  const { messageId } = useParams();

  const message = messages.find(m => m.id === Number(messageId));

  return (
    <div className="container mt-3">
      <MessageItem message={message} />
    </div>
  )
}