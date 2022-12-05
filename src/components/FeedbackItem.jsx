import { useContext } from 'react';
import { FaEdit, FaTimes } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';

function FeedbackItem({ item }) {
  const { deleteItem, editItem } = useContext(FeedbackContext);

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteItem(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <button onClick={() => editItem(item)} className='edit'>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
