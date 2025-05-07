import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = () => {
  return (
    <div className="main">
      <ItemList
        title="Artistas populares"
        items={5}
        arrayList={artistArray}
        path="/artists"
        idPath="/artists"
      />
      <ItemList
        title="Músicas populares"
        items={10}
        arrayList={songsArray}
        path="/songs"
        idPath="/songs"
      />
    </div>
  );
};

export default Main;
