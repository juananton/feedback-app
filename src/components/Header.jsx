import { Link } from 'react-router-dom';

function Header({ text }) {
  return (
    <header>
      <h3>{text}</h3>

      <Link to='/about'>
        <p>info</p>
      </Link>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback App',
};

export default Header;
