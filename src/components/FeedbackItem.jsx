import { useContext } from 'react';
import { FiEdit, FiXCircle } from 'react-icons/fi';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';
import IconButton from './shared/IconButton';

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
          <IconButton onClick={() => editItem(item)}>
            <FiEdit className='icon' />
          </IconButton>
          <IconButton onClick={() => deleteItem(item.id)}>
            <FiXCircle className='icon' />
          </IconButton>
        </div>
      </div>
    </Card>
  );
}

export default FeedbackItem;
