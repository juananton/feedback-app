import PropTypes from 'prop-types';

function Header({ text }) {
  return (
    <header>
      <h3>{text}</h3>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback App',
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
