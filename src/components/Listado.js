import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../App.css';

function Listado(props) {
  let token = sessionStorage.getItem('token');

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const endPoint =
      'https://api.themoviedb.org/3/discover/movie?api_key=322563215d6acaa5cbfa086c10b5a17f&language=es&page=1';
    axios
      .get(endPoint)
      .then((response) => {
        const apiData = response.data;
        setMoviesList(apiData.results);
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error',
          text: 'Ocurrio un error al conectarse a TMDB',
          icon: 'error',
          confirmButtonText: 'Cool',
        });
      });
  }, []);

  return (
    <>
      {!token && <Navigate to='/' />}

      <div className='row'>
        {moviesList.map((oneMovie, idx) => {
          return (
            <div className='col-3' key={idx}>
              <div className='card'>
                <img
                  src={`https://image.tmdb.org/t/p/w500${oneMovie.poster_path}`}
                  className='card-img-top'
                  alt='...'
                />
                <button
                  className='favourite-btn'
                  onClick={props.addOrRemoveFromFavs}
                  data-movie-id={oneMovie.id}
                >
                  🤍
                </button>
                <div className='card-body'>
                  <h5 className='card-title'>{oneMovie.title}</h5>
                  <p className='card-text'>
                    {oneMovie.overview.substring(0, 150)}...
                  </p>
                  <Link
                    to={`/detalle?movieID=${oneMovie.id}`}
                    className='btn btn-primary'
                  >
                    ver Detalles
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Listado;
