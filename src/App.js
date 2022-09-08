import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Listado from './components/Listado';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/listado' element={<Listado />} />
      </Routes>
    </div>
  );
}

export default App;
