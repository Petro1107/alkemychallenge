import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <a
              className='footer-link'
              href='http://instagram.com'
              rel='noopener noreferrer'
            >
              IG
            </a>
          </li>
        </ul>
        <p className='footer-item'>Copyright Alkemy Challenge</p>
      </nav>
    </footer>
  );
}

export default Footer;
