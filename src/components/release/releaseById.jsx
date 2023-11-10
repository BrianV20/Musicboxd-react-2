import React, { useState } from "react";
// import './Body.css';
import { createReviewSchema } from "@/schemas/validation/review";
import { mappedErrors } from "@/utils/mapped-errors";
import { getReleases } from "../../services/releases";
import { getArtists } from "../../services/artists";
import { getReviews, createReview } from "../../services/reviews";
import { useQuery } from "@tanstack/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { NavBar } from "../nav-bar";
import { Footer } from "../footer";

// const findRelease = async (releases, id) => {
//   return await releases.map((release) => release.id === id);
// };

// const findArtist = async (artists, release) => {
//     return await artists.find((artist) => artist.id === release.artist.id);
// };

const yearOfRelease = (date) => {
  return date.slice(0, 4);
}

export const ReleaseById = (props) => {
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

  //   let release = releases?.find((release) => release.id == id);
  //   let artist = Artist?.find((artist) => artist.id == release.artist.id);
  // let release = findRelease(releases, id);
  // let artist = findArtist(Artist, release);

  return (
    <>
      <NavBar />
      <main id="releaseByIdMain">
        {releases?.map((release) => (
          <div>
            {release.id == id ? (
              <div>
                <h2>{release.name}</h2>
                <div></div>
                {Artist?.map((artist) => (
                  <div>
                    {release.artist.id === artist.id ? (
                      <h4>{artist.fullName}</h4>
                    ) : null}
                  </div>
                ))}
                <h4>{yearOfRelease(release.releaseDate)}</h4>
              </div>
            ) : null}
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
};
