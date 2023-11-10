import React, { useState } from 'react';
import './Body.css';

const Artist = () => {
  return (
    <main id='mainArtist'>
      <div className="artist-container">  
        {/* <img src={artistData.cover} alt="Portada del Álbum" className="artist-cover" /> */}
        <div className="artist-details">
          <h1>nombre artista/grupo</h1>
          <p className="artist-year">country</p>
        </div>
      </div>

      <div className="artistReleases">
        <h3>Releases</h3>
        <ul>mostrar los discos en una grilla simple</ul>
      </div>
    </main>
  );
};

export default Artist;