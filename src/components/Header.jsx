import style from './Header.module.css';

function Header({ text }) {
  return (
    <header className={style.header}>
      <h3>{text}</h3>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback App',
};

export default Header;
