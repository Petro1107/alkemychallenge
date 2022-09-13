import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Listado from './components/Listado';
import Header from './components/Header';
import Footer from './components/Footer';
import Detalle from './components/Detalle';
import Resultados from './components/Resultados';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/listado' element={<Listado />} />
          <Route path='/detalle' element={<Detalle />} />
          <Route path='/resultados' element={<Resultados />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
