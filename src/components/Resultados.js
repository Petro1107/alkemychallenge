import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../App.css';

function Resultados() {
  let query = new URLSearchParams(window.location.search);
  let keyword = query.get('keyword');

  const [movieResults, setMovieResults] = useState([]);
  const { pathName } = useLocation();

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=322563215d6acaa5cbfa086c10b5a17f&language=es-ES&page=1&include_adult=false&query=${keyword}`;
    axios
      .get(endPoint)
      .then((response) => {
        const moviesArray = response.data.results;

        if (moviesArray.length === 0) {
          Swal.fire({ title: 'Tu busqueda no arrojó resultados' });
        }

        setMovieResults(moviesArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pathName, keyword]);

  return (
    <>
      {/* https://api.themoviedb.org/3/search/movie?api_key=322563215d6acaa5cbfa086c10b5a17f&language=es-ES&page=1&include_adult=false&query= */}

      <h2>Resultados</h2>
      <p>Vas a buscar {keyword}</p>

      {movieResults.length === 0 && <h3>No hay resultados</h3>}
      <div className='row'>
        {movieResults.map((oneMovie, idx) => {
          return (
            <div className='col-3' key={idx}>
              <div className='card'>
                <img
                  src={`https://image.tmdb.org/t/p/w500${oneMovie.poster_path}`}
                  className='card-img-top'
                  alt='...'
                />
                <button className='favourite-btn'></button>
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

export default Resultados;
