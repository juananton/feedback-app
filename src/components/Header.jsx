import { Link } from 'react-router-dom';

function Header({ text }) {
  return (
    <header>
      <Link to='/'>
        <h3>{text}</h3>
      </Link>
      <Link to='/info'>
        <p>info</p>
      </Link>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback App',
};

export default Header;
