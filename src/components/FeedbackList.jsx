import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedbackListData }) {
  if (!feedbackListData || feedbackListData.length === 0) {
    return <p>No feedback yet</p>;
  }
  return (
    <div className='feedback-list'>
      {feedbackListData.map((item) => (
        <FeedbackItem key={item.id} feedbackItemData={item} />
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
  feedbackListData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
