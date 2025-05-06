import React from "react";
import logoSpotify from "../assets/logo/spotify-logo.png";

const Header = () => {
  return (
    <div>
      <img src={logoSpotify} alt="Logo Spotify" />
      <a className="header__link" href="/">
        <h1>Header</h1>
      </a>
    </div>
  );
};

export default Header;
