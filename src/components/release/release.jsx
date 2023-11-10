import React, { useState } from 'react';
import './Body.css';

const Release = () => {
  const albumData = {
    title: 'Artaud',
    artist: 'Pescado Rabioso',
    genre: 'Argentinian Rock',
    year: '1971',
    cover: 'https://images.squarespace-cdn.com/content/v1/5a0dd6831f318dcf5130a0d5/4ab03905-7a61-403d-909d-2a2ba0dfafd1/ARTAUD_1080x.jpeg', 
    description: 'Este álbum es impresionante, pero los normis lo infravaloran. Me gusta como suena la ocarina',
  };

  const [reviews, setReviews] = useState([]);
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
  const pruebaReview = 'NoMamesCabron8825: Esta es una reseña de prueba para destacar la funcionalidad. ¡Gran álbum!';

  return (
    <main id='mainRelease'>
      <div className="album-container">  
        <img src={albumData.cover} alt="Portada del Álbum" className="album-cover" />
        <div className="album-details">
          <h1>{albumData.title}</h1>
          <h2>por {albumData.artist}</h2>
          <h6>{albumData.genre}</h6>
          <p className="album-year">{albumData.year}</p>
          <p>{albumData.description}</p>
        </div>
      </div>

      {/* reseñas */}
      <div className="reviews-container">
        <h3>Reseñas</h3>
        <ul>
          {/* Muestra la reseña de prueba */}
          <li>{pruebaReview}</li>
          {/* Muestra las reseñas existentes */}
          {reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>
        <div className="review-input">
          <textarea
            placeholder="Escribe tu reseña aquí..."
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
          />
          <button onClick={handleAddReview}>Agregar reseña</button>
        </div>
      </div>
    </main>
  );
};

export default Release;