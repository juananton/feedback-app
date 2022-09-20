import PropTypes from 'prop-types';

function FeedbackStats({ feedbackListData }) {
  let average =
    feedbackListData.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedbackListData.length;

  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className='feedback-stats'>
      <h4>{feedbackListData.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;

FeedbackStats.propTypes = {
  feedbackListData: PropTypes.array.isRequired,
};
