import React from "react";
import { createReviewSchema } from "@/schemas/validation/review";
import { mappedErrors } from "@/utils/mapped-errors";
import { getReleases } from "../../services/releases";
import { getReviews, createReview } from "../../services/reviews";
import { useQuery } from "@tanstack/react-query";
import { useMutation  } from "@tanstack/react-query";
import { toast } from "sonner";
import { Link } from "wouter";

import { NavBar } from "../nav-bar";
import { Footer } from "../footer";

import "../../../public/css/releaseById.css";

const yearOfRelease = (date) => {
  return date.slice(0, 4);
};

export const ReleaseById = (props) => {
  const { id } = props.params;

  const { data: releases } = useQuery({
    queryKey: ["releases"],
    queryFn: () => getReleases(),
  });

  const { data: reviews } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => getReviews(),
  });

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
              <div className="releaseById-container">
                <img
                  src={release.urlImage}
                  alt="Portada del Álbum"
                  className="album-cover"
                />
                <h2>{release.name}</h2>
                <div></div>
                <div className="album-details">
                  <Link to={`/artists/${release.artist.id}`}>
                    <h3>{release.artist.fullName}</h3>
                  </Link>
                  <h5>Genre: {" " + release.genre.name}</h5>
                </div>
                <h4>{yearOfRelease(release.releaseDate)}</h4>
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
            ) : null}
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
};
