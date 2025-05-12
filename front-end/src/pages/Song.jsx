import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const { id } = useParams();
  const songObj = songsArray.filter((currentObj) => currentObj._id === id)[0];

  const artistObj = artistArray.filter(
    (currentObj) => currentObj.name === songObj.artist
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === artistObj.name
  );

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIndex2 = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIdFromArtistSong = songsArrayFromArtist[randomIndex]._id;
  const randomId2FromArtistSong = songsArrayFromArtist[randomIndex2]._id;
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
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
            with={75}
            height={75}
            src={songObj.image}
            alt={`Imagem do artista ${songObj.name}`}
          />
        </Link>
        <Player
          duration={songObj.duration}
          randomIdFromArtistSong={randomIdFromArtistSong}
          randomId2FromArtistSong={randomId2FromArtistSong}
          audio={songObj.audio}
        />
        <div>
          <p className="song__name">{songObj.name}</p>
          <p>{songObj.artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
