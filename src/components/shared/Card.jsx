import { PropTypes } from 'prop-types';

function Card({ children, reverseStyle }) {
  return <div className={`card ${reverseStyle && 'reverse'}`}>{children}</div>;
}

Card.defaultProps = {
  reverseStyle: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
