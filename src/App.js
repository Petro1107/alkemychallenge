import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './components/Login';
import Listado from './components/Listado';
import Header from './components/Header';
import Footer from './components/Footer';
import Detalle from './components/Detalle';
import Resultados from './components/Resultados';
import Favoritos from './components/Favoritos';

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favsInLocal = localStorage.getItem('favs');
    console.log(favsInLocal);
    if (favsInLocal !== null) {
      const favsArray = JSON.parse(favsInLocal);
      console.log(favsArray);
      setFavorites(favsArray);
    }
  }, []);

  const addOrRemoveFromFavs = (e) => {
    const favMovies = localStorage.getItem('favs');

    let tempMoviesInFavs;

    if (favMovies === null) {
      tempMoviesInFavs = [];
    } else {
      tempMoviesInFavs = JSON.parse(favMovies);
    }

    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector('img').getAttribute('src');
    const title = parent.querySelector('h5').innerText;
    const overview = parent.querySelector('p').innerText;

    const movieData = {
      imgURL,
      title,
      overview,
      id: btn.dataset.movieId,
    };

    console.log(btn);

    let movieIsInArray = tempMoviesInFavs.find((oneMovie) => {
      return oneMovie.id === movieData.id;
    });
    if (!movieIsInArray) {
      tempMoviesInFavs.push(movieData);
      localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs));
      setFavorites(tempMoviesInFavs);
      console.log('se agregó');
    } else {
      let moviesLeft = tempMoviesInFavs.filter((oneMovie) => {
        return oneMovie.id !== movieData.id;
      });
      localStorage.setItem('favs', JSON.stringify(moviesLeft));
      setFavorites(moviesLeft);
      console.log('Se eliminó');
    }
  };

  return (
    <>
      <Header />
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route
            path='/listado'
            element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />}
          />
          <Route path='/detalle' element={<Detalle />} />
          <Route path='/resultados' element={<Resultados />} />
          <Route
            path='/favoritos'
            element={
              <Favoritos
                addOrRemoveFromFavs={addOrRemoveFromFavs}
                favorites={favorites}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
