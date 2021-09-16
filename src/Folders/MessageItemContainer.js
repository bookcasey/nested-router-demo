import React from "react"
import { useParams } from "react-router-dom";
import MessageItem from "./MessageItem"

export default function MessageItemContainer({ folders = [], messages = [] }) {
  const { folderId, messageId } = useParams();

  const currentFolder = folders.find(f => f.id === Number(folderId));
  const folderName = currentFolder?.name;
  const message = messages.find(m => m.id === Number(messageId));

  return (
    <div className="container mt-3">
      <h2>{folderName} - View Message</h2>
      <MessageItem message={message} />
    </div>
  )
}