import React from "react"
import { useParams } from "react-router-dom";
import MessageList from "./MessageList"

export default function MessageListContainer({ folders = [], messages = [] }) {
  const { folderId } = useParams();

  const currentFolder = folders.find(f => f.id === Number(folderId));
  const folderName = currentFolder?.name;
  const currentMessages = messages.filter(m => m.folderId === Number(folderId));

  return (
    <div className="container mt-3">
      <h2>{folderName} - Total messages: {currentMessages.length}</h2>
      <MessageList folderName={folderName} messages={currentMessages} />
    </div>
  )
}