import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const { list } = useContext(FeedbackContext);

  const totalRating = list.reduce((acc, cur) => acc + cur.rating, 0);
  const average = (totalRating / list.length).toFixed(1);

  return (
    <div className='feedback-stats'>
      <h4>{list.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
