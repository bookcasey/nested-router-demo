import React from "react"
import { useParams } from "react-router-dom";
import MessageList from "./MessageList"
import MessageItem from "./MessageItem"

export default function FolderContent({ messages }) {
  const { folderId } = useParams();
  const currentMessages = messages.filter(m => m.folderId === Number(folderId));
  console.log(currentMessages);

  return (
    <div className="container mt-3">
      <MessageList messages={currentMessages} />
      <MessageItem message={currentMessages[0]} />
    </div>
  )
}