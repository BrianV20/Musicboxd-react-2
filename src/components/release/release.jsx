import React, { useState } from "react";
// import './Body.css';
import { createReviewSchema } from "@/schemas/validation/review";
import { mappedErrors } from "@/utils/mapped-errors";
import { getReleases } from "../../services/releases";
import { getReviews, createReview } from "../../services/reviews";
import { useQuery } from "@tanstack/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useLocation, Link } from "wouter";

import { NavBar } from "../nav-bar";
import { Footer } from "../footer";

import "../../../public/css/release.css";

export const Release = () => {
  const [errors, setErrors] = useState({});
  const queryClient = useQueryClient();
  const [, setNavigate] = useLocation();

  const yearOfRelease = (date) => {
    return date.slice(0, 4);
  };

  const { mutate } = useMutation({
    mutationKey: ["review"],
    mutationFn: (reviewData) => createReview(reviewData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["review"] });
      toast.success("review created");
      setNavigate("/");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Error creating user");
    },
  });
  const { data: releases } = useQuery({
    queryKey: ["releases"],
    queryFn: () => getReleases(),
  });
  const { data: reviews } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => getReviews(),
  });

  const handleAddReview = (e) => {
    e.preventDefault();
    console.log(e.target);
    const formData = new FormData(e.target);
    const data = {
      ...Object.fromEntries(formData),
      UserId: 3,
      ReleaseId: parseInt(formData.get("releaseId"), 10),
      RatingId: parseInt(formData.get("ratingId"), 10),
    };
    const { success, errors } = mappedErrors(createReviewSchema, data);
    if (!success) {
      console.log(errors);
      setErrors(errors);
      return;
    }
    e.target.reset();
    setErrors({});
    mutate(data);
  };

  return (
    <>
      <NavBar />
      <main id="mainRelease">
        {releases?.map((release) => (
          <div className="release-container">
            <div className="album-details">
              <Link to={`/releases/${release.id}`}>
                <img
                  src={release.urlImage}
                  alt="Portada del Álbum"
                  className="album-cover"
                />
              </Link>

              <Link to={`/releases/${release.id}`}>
                <h2>{release.name}</h2>
              </Link>

              <h4>por</h4>
              <Link to={`/artists/${release.artist.id}`}>
                <h3>{release.artist.fullName}</h3>
              </Link>
              <h6>{release.genre.name}</h6>
              <p className="album-year">{yearOfRelease(release.releaseDate)}</p>
              {/* <p>{albumData.description}</p> este campo tambien se lo tengo que agregar y cambiarlo por el de score */}
            </div>
            <div className="reviews-container">
              <h4>Reseñas</h4>
              {reviews?.map((review) => (
                <ul>
                  {release.id == review.releaseId ? <li>{review.text}</li> : ""}
                </ul>
              ))}
              <form onSubmit={handleAddReview}>
                <div className="review-input">
                  <textarea
                    placeholder="Escribe tu reseña aquí..."
                    name="Text"
                  />
                  <input
                    type="number"
                    name="ratingId"
                    placeholder="ingrese su calif (1 a 5)"
                  />
                  <input
                    type="number"
                    name="releaseId"
                    value={release.id}
                    placeholder="ingrese su calif (1 a 5)"
                    className="inputReleaseId"
                  />
                  {/* hay que ocultar este input */}
                </div>
                <button>Agregar reseña</button>
              </form>
            </div>
          </div>
        ))}
        {/* </div> */}

        {/* reseñas */}
      </main>
      <Footer />
    </>
  );
};
