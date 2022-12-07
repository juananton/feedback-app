import { useContext } from 'react';
import { FaEdit, FaTimes } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';

function FeedbackItem({ item }) {
  const { deleteItem, editItem } = useContext(FeedbackContext);

  return (
    <Card>
      <div className='item-wrapper'>
        <div className='feedback-wrapper'>
          <div className='num-display'>{item.rating}</div>
          <div className='text-display'>{item.review}</div>
        </div>
        <div className='buttons-wrapper'>
          <button onClick={() => editItem(item)} className='edit'>
            <FaEdit color='black' className='icon' />
          </button>
          <button onClick={() => deleteItem(item.id)} className='close'>
            <FaTimes color='black' className='icon' />
          </button>
        </div>
      </div>
    </Card>
  );
}

export default FeedbackItem;
