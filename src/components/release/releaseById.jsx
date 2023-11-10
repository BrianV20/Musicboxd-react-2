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

const findRelease = async (releases, id) => {
  return await releases.find((release) => release.id === id);
};

const findArtist = async (artists, id) => {
    return await artists.find((artist) => artist.id === id);
};

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

  return (
    <>
      <NavBar />
      <div>
        <h2>{release.name}</h2>
      </div>
      <Footer />
    </>
  );
};
