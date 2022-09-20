import PropTypes from 'prop-types';
import Card from './shared/Card';

function FeedbackItem({ feedbackItemData }) {
  return (
    <Card>
      <div className='num-display'>{feedbackItemData.rating}</div>
      <div className='text-display'>{feedbackItemData.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  feedbackItemData: PropTypes.object.isRequired,
};

export default FeedbackItem;
