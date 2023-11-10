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

export const Release = () => {
  const [errors, setErrors] = useState({});
  const queryClient = useQueryClient();
  const [, setNavigate] = useLocation();

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
  // if (isError) toast.error("Error getting users");

  // const [reviews, setReviews] = useState([]);
  // const [newReview, setNewReview] = useState('');
  // const [userName, setUserName] = useState('');

  // const handleAddReview = () => {
  //   if (newReview.trim() !== '' && userName.trim() !== '') {
  //     const userReview = `${userName}: ${newReview}`;
  //     setReviews([...reviews, userReview]);
  //     setNewReview('');
  //     setUserName('');
  //   }
  // };
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
  // Reseña de prueba
  // const pruebaReview = 'NoMamesCabron8825: Esta es una reseña de prueba para destacar la funcionalidad. ¡Gran álbum!';

  return (
    <>
      <NavBar />
      <main id="mainRelease">
        <div className="album-container">
          {releases?.map((release) => (
            <div>
              <div className="album-details">
                <img
                  src={release.UrlImage}
                  alt="Portada del Álbum"
                  className="album-cover"
                />

                <Link to={`/releases/${release.id}`}>
                  <h2>{release.name}</h2>
                </Link>

                <h3>por {release.artist.fullName}</h3>
                <h6>{release.genre.name}</h6>
                <p className="album-year">{release.releaseDate}</p>
                {/* <p>{albumData.description}</p> este campo tambien se lo tengo que agregar y cambiarlo por el de score */}
              </div>
              <div className="reviews-container">
                <h4>Reseñas</h4>
                {reviews?.map((review) => (
                  <ul>
                    {release.id == review.releaseId ? (
                      <li>{review.text}</li>
                    ) : (
                      ""
                    )}
                  </ul>
                ))}
                <form onSubmit={handleAddReview}>
                  <div className="review-input">
                    <textarea
                      placeholder="Escribe tu reseña aquí..."
                      name="Text"
                      // value={newReview}
                      // onChange={(e) => setNewReview(e.target.value)}
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
                    />
                    {/* hay que ocultar este input */}
                  </div>
                  <button>Agregar reseña</button>
                </form>
              </div>
            </div>
          ))}
        </div>

        {/* reseñas */}
      </main>
      <Footer />
    </>
  );
};
