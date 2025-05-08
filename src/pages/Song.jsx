import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const { id } = useParams();
  const songId = Number(id);

  const songObj = songsArray.filter(
    (currentObj) => currentObj.id === songId
  )[0];

  const artistObj = artistArray.filter(
    (currentObj) => currentObj.name === songObj.artist
  )[0];

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img
            className="song__artist-image"
            src={artistObj.image}
            alt="Imagem da música X"
          />
        </div>
      </div>
      <div className="song__bar">
        <Link to={`artist/1`} className="song__artist-image">
          <img
            with={75}
            height={75}
            src={songObj.image}
            alt={`Imagem do artista ${songObj.name}`}
          />
        </Link>
        <Player />
        <div>
          <p className="song__name">{songObj.name}</p>
          <p>{songObj.artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
