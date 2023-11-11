import React, { useState } from "react";
import { getReleases } from "../../services/releases";
import { getArtists } from "../../services/artists";
import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { useLocation, Link } from "wouter";

import { NavBar } from "../nav-bar";
import { Footer } from "../footer";

import "../../../public/css/artistById.css";

export const ArtistById = (props) => {
  const [errors, setErrors] = useState({});
  const queryClient = useQueryClient();
  const [, setNavigate] = useLocation();

  const { id } = props.params;

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

  return (
    <>
      <NavBar />
      <main id="artistByIdMain">
        {Artist?.map((artist) => (
          <div>
            {artist.id == id ? (
              <div className="artist-container">
                <div className="artist-details">
                  <h1>{artist.fullName}</h1>
                  <h4>Releases</h4>
                  <ul>
                    {releases?.map((release) =>
                      release.artist.id === artist.id ? (
                        <li>
                          <Link to={`/releases/${release.id}`}>
                            <a>

                            {release.name}
                            </a>
                          </Link>
                        </li>
                      ) : null
                    )}
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
};
