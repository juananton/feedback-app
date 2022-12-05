function Card({ children, active = false }) {
  return <div className={`card ${active && 'active'}`}>{children}</div>;
}

export default Card;
