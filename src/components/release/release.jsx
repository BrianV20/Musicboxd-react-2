import React, { useState } from 'react';
// import './Body.css';
import { getReleases } from '../../services/releases';
import { getReviews } from '../../services/reviews';
import { useQuery } from "@tanstack/react-query";

export const Release = () => {
  const albumData = {
    title: 'Artaud',
    artist: 'Pescado Rabioso',
    genre: 'Argentinian Rock',
    year: '1971',
    cover: 'https://images.squarespace-cdn.com/content/v1/5a0dd6831f318dcf5130a0d5/4ab03905-7a61-403d-909d-2a2ba0dfafd1/ARTAUD_1080x.jpeg', 
    description: 'Este álbum es impresionante, pero los normis lo infravaloran. Me gusta como suena la ocarina',
  };
  const {
    data: releases
  } = useQuery({
    queryKey: ["releases"],
    queryFn: () => getReleases(),
  });
  const {
    data: reviews
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => getReviews(),
  });
  // if (isError) toast.error("Error getting users");

  // const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [userName, setUserName] = useState('');

  const handleAddReview = () => {
    if (newReview.trim() !== '' && userName.trim() !== '') {
      const userReview = `${userName}: ${newReview}`;
      setReviews([...reviews, userReview]);
      setNewReview('');
      setUserName('');
    }
  };

  // Reseña de prueba
  // const pruebaReview = 'NoMamesCabron8825: Esta es una reseña de prueba para destacar la funcionalidad. ¡Gran álbum!';

  return (
    <main id='mainRelease'>
      <div className="album-container">  
      {/* <img src={albumData.cover} alt="Portada del Álbum" className="album-cover" />  ahora agrego este campo*/}
        {releases?.map((release) => (
      <div>
        <div className="album-details">
          <h1>{release.name}</h1>
          <h2>por {release.artist.fullName}</h2>
          <h6>{release.genre.name}</h6>
          <p className="album-year">{release.releaseDate}</p>
          {/* <p>{albumData.description}</p> este campo tambien se lo tengo que agregar y cambiarlo por el de score */}
        </div>
          <div className="reviews-container">
            <h3>Reseñas</h3>
              {reviews?.map((review) => (
            <ul>

                { release.id == review.releaseId ? <li>{review.text}</li> : ''}

            </ul>
              ))}
            <div className="review-input">
              <textarea
                placeholder="Escribe tu reseña aquí..."
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
              />
              <button onClick={handleAddReview}>Agregar reseña</button>
            </div>
          </div>
      </div>
        
        ))}
      </div>

      {/* reseñas */}
    </main>
  );
};

export default Release;