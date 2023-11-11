import React from "react";
import "../../../public/css/featuredRelease.css";
import { getReleases } from "../../services/releases";
import { getArtists } from "../../services/artists";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";

export const FeaturedRelease = () => {
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

  let randomRelease = Math.floor(Math.random() * 12) + 1;

  return (
    <main>
      <div className="albumCover col-5">
        {releases?.map((release) => (
          <div>
            {release.id == randomRelease ? (
              <div>
                <Link to={`/releases/${release.id}`}>
                  <img src={release.urlImage} alt="album cover" />
                </Link>
                <Link to={`/releases/${release.id}`}>
                  <h3>{release.name}</h3>
                </Link>
                <Link to={`/artists/${release.artist.id}`}>
                  <h3>{release.artist.fullName}</h3>
                </Link>
                <h5>Genre: {release.genre.name}</h5>
                {/* <h5>{release.rating} / 5.0 with {release.ratingCount} ratings</h5> */}
              </div>
            ) : null}
            {/* // <h3>{release.name}</h3> */}
          </div>
        ))}
      </div>
    </main>
  );
};
