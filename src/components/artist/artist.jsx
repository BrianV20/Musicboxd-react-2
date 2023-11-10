import React, { useState, useLocation as searchParameters } from "react";
// import './Body.css';
import { getArtists } from "../../services/artists";
import { getReleases } from "../../services/releases";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";

import { NavBar } from "../nav-bar";
import { Footer } from "../footer";

import "../../../public/css/artist.css";

export const Artist = () => {
  const { data: releases } = useQuery({
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
    <>
      <NavBar />
      <main id="mainArtist">
        {/* <img src={artistData.cover} alt="Portada del Álbum" className="artist-cover" /> */}
        {Artist?.map((artist) => (
          <div className="artist-container">
            <div className="artist-details">
              <h1>{artist.fullName}</h1>
              <p className="artist-country">{artist.country.name}</p>
            </div>
            <h3>Releases</h3>
            <ul>
              {releases?.map((release) =>
                release.artist.id === artist.id ? (
                  <li>
                    <Link to={`/releases/${release.id}`}>{release.name}</Link>
                  </li>
                ) : null
              )}
            </ul>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
};

// export default Artist;
