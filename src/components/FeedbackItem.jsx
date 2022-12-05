import { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';

function FeedbackItem({ item }) {
  const { deleteItem } = useContext(FeedbackContext);
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteItem(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
