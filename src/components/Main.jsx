import React from "react";
import { fontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <div className="main">
      {/* List of popular artists */}

      <div className="item-list">
        <div className="item-list__header">
          <h2>Artistas Populares</h2>
          <a className="item-list__link" href="/">
            Mostrar tudo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
