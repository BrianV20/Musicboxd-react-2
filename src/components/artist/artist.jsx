import React, { useState } from 'react';
// import './Body.css';
import { getArtists } from '../../services/artists';
import { getReleases } from '../../services/releases';
import { useQuery } from "@tanstack/react-query";
 import { useLocation } from "wouter";


export const Artist = () => {

  const {
    data: releases
  } = useQuery({
    queryKey: ["releases"],
    queryFn: () => getReleases(),
  });
  const {
    data: Artist,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["artists"],
    queryFn: () => getArtists(),
  });

  if (isError) toast.error("Error getting users");
  return (
    <main id='mainArtist'>
        {/* <img src={artistData.cover} alt="Portada del Álbum" className="artist-cover" /> */}
        {Artist?.map((artist) => (
      <div className="artist-container">  
          <div className="artist-details">
            <h1>{artist.fullName}</h1>
            <p className="artist-year">{artist.country.name}</p>
          </div>
          <h3>Releases</h3>
          {releases?.map((release) => (
            <div className="artistReleases">
              <ul>
                {release.artist.id == artist.id ? <li>{release.name}</li> : ''}
              </ul>
            </div>
          ))}
      </div>
        ))}
    </main>
          
  );
};

// export default Artist;