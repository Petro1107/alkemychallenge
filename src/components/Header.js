import { Link } from 'react-router-dom';
import Buscador from '../components/Buscador';

import '../styles/Header.css';

function Header() {
  return (
    <header>
      <nav className='navbar'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/listado'>Listado</Link>
          </li>
          <li>
            <Link to='/favoritos'>Favoritos</Link>
          </li>
          <li>
            <Buscador />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
