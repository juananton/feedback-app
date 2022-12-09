import { useContext, useEffect, useState } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';

function FeedbackForm() {
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [isActive, setIsActive] = useState(false);

  const { addItem, itemEdit, updateItem } = useContext(FeedbackContext);

  useEffect(() => {
    if (itemEdit.edit) {
      setIsActive(true);
      setRating(itemEdit.item.rating);
      setReview(itemEdit.item.review);
      setBtnDisabled(false);
    }
  }, [itemEdit]);

  const handleTextChange = e => {
    const isReviewEmpty = review === '';
    const isReviewTooShort = review.trim().length <= 10;

    if (isReviewEmpty) {
      setBtnDisabled(true);
      setMessage(null);
    } else if (isReviewTooShort) {
      setBtnDisabled(true);
      setMessage('Review must be at least 10 characters');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setReview(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isReviewValid = review.trim().length > 10;
    if (!isReviewValid) return;

    const newItem = {
      review,
      rating,
    };

    if (itemEdit.edit) {
      updateItem(itemEdit.item.id, newItem);
    } else {
      addItem(newItem);
    }

    setReview('');
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
            value={review}
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
