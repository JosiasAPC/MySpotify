import { artistArray } from "../../front-end/src/assets/database/artists-insert-in-db.js";
import { songsArray } from "../../front-end/src/assets/database/songs-insert-in-db.js";
import { db } from "./connect.js";

// console.log(artistArray);
// console.log(songsArray);

const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = { ...currentArtistObj };
  delete newArtistObj.id;

  return newArtistObj;
});

// console.log(newArtistArray);

const newSongArray = songsArray.map((currentSongOnj) => {
  const newSongObj = { ...currentSongOnj };
  delete newSongObj.id;

  return newSongObj;
});

// console.log(newSongArray);

const songResponse = await db.collection("songs").insertMany(newSongArray);
const artistResponse = await db
  .collection("artists")
  .insertMany(newArtistArray);

// console.log(songResponse);
// console.log(artistResponse);
