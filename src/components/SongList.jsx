import React from "react";
import SongItem from "./SongItem";

const SongList = ({ arraySongList }) => {
  let items = 5;
  console.log(items);
  return (
    <div className="song-list">
      {arraySongList
        .filter((currentValue, index) => index < items)
        .map((currentObj, index) => (
          <SongItem
            {...currentObj}
            key={`${index}`}
            index={index}
            // idPath={idPath}
          />
        ))}

      <p onclick={(items = 10)} className="song-list__see-more">
        Ver mais
      </p>
    </div>
  );
};

export default SongList;
