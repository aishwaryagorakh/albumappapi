import React from "react";
import "./albumlist.css";
import List from "../List/List";
export const Albumlist = (props) => {
  return (
    <>
      <div className="album-list">
        {/* mapping the array of album and passing the data as props to List component */}
        {props.album.map((album) => (
          <List
            key={album.id}
            album={album}
            deleteAlbumFromList={props.deleteAlbumFromList}
            setUpdateAlbum={props.setUpdateAlbum}
          />
        ))}
      </div>
    </>
  );
};
