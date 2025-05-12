import SongItem from "./SongItem";
import { React, useState } from "react";

const SongList = ({ arraySongList }) => {
  const [items, setItems] = useState(5);

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

      <p
        onClick={() => {
          setItems(items + 5);
        }}
        className="song-list__see-more"
      >
        Ver mais
      </p>
    </div>
  );
};

export default SongList;
