import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './shared/Card';

function FeedbackItem({ feedbackItemData, handleDelete }) {
  return (
    <Card>
      <div className='num-display'>{feedbackItemData.rating}</div>
      <button
        onClick={() => handleDelete(feedbackItemData.id)}
        className='close'
      >
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{feedbackItemData.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  feedbackItemData: PropTypes.object.isRequired,
};

export default FeedbackItem;
