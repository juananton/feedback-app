import { useContext, useEffect, useState } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [isActive, setIsActive] = useState(false);

  const { addItem, itemEdit, updateItem } = useContext(FeedbackContext);

  useEffect(() => {
    if (itemEdit.edit) {
      setBtnDisabled(false);
      setText(itemEdit.item.text);
      setRating(itemEdit.item.rating);
      setIsActive(true);
    }
  }, [itemEdit]);

  const handleTextChange = e => {
    const { value } = e.target;
    const isTextEmpty = value === '';
    const isTextTooShort = value.trim().length <= 10;

    if (isTextEmpty) {
      setBtnDisabled(true);
      setMessage(null);
    } else if (isTextTooShort) {
      setBtnDisabled(true);
      setMessage('Text must be at least 10 characters');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isTextValid = text.trim().length > 10;
    if (!isTextValid) return;

    const newItem = {
      text,
      rating,
    };

    if (itemEdit.edit) {
      updateItem(itemEdit.item.id, newItem);
    } else {
      addItem(newItem);
    }

    setText('');
    setBtnDisabled(true);
    setRating(5);
    setIsActive(false);
  };

  return (
    <Card active={isActive && true}>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service?</h2>
        <RatingSelect select={setRating} selected={rating} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
