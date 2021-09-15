import React from "react";
import { Link, useParams } from "react-router-dom";

export default function FolderList({ folders }) {
  const { folderId } = useParams();
  console.log(folderId);

  return (
    <div className="list-group">
      {folders.map(folder => {
        const classes = ["list-group-item", "list-group-item-action"];
        if (folder.id === Number(folderId)) classes.push("active");

        return (
          <Link to={`/folders/${folder.id}/messages`} key={folder.id} className={classes.join(" ")}>
            {folder.name}
          </Link>
        );
      })}
    </div>
  )
}