// import { useState, useEffect } from 'react';

function Favoritos(props) {
  //   const [favorites, setFavorites] = useState([]);

  //   useEffect(() => {
  //     const favsInLocal = localStorage.getItem('favs');
  //     console.log(favsInLocal);
  //     if (favsInLocal !== null) {
  //       const favsArray = JSON.parse(favsInLocal);
  //       console.log(favsArray);
  //       setFavorites(favsArray);
  //     }
  //   }, []);

  return (
    <>
      <h2>Favoritos</h2>
      <div className='row'>
        {props.favorites.map((oneMovie, idx) => {
          return (
            <div className='col-3' key={idx}>
              <div className='card'>
                <img src={oneMovie.imgURL} className='card-img-top' alt='...' />
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
                  {/* <Link
                    to={`/detalle?movieID=${oneMovie.id}`}
                    className='btn btn-primary'
                  >
                    ver Detalles
                  </Link> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Favoritos;
