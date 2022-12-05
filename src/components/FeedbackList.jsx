import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';

function FeedbackList() {
  const { list } = useContext(FeedbackContext);

  if (!list || list.length === 0) {
    return <p>No feedback</p>;
  }
  return (
    <div className='feedback-list'>
      {list.map(item => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;
