import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Detalle() {
  let token = sessionStorage.getItem('token');

  let query = new URLSearchParams(window.location.search);
  let movieID = query.get('movieID');

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=322563215d6acaa5cbfa086c10b5a17f&language=es`;

    axios
      .get(endPoint)
      .then((response) => {
        const movieData = response.data;

        setMovie(movieData);
      })
      .catch((error) => {
        console.log('Hubo errores');
      });
  }, [movieID]);

  return (
    <>
      {!token && <Navigate to='/' />}
      {movie && (
        <>
          <h2>Título: {movie.title} </h2>
          <div className='row'>
            <div className='col-4'>
              <img
                className='img-fluid'
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt='movie poster'
              />
            </div>
            <div className='col-4'>
              <h5>Fecha de estreno: {movie.release_date}</h5>
              <h5>Reseña: </h5>
              <p>{movie.overview}</p>
              <h5>Rating: {movie.vote_average} </h5>
              <h5>Generos:</h5>
              <ul>
                {movie.genres.map((oneGenre) => (
                  <li key={oneGenre.id}>{oneGenre.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
      ;
    </>
  );
}

export default Detalle;
