import { useState } from 'react';

function FeedbackItem({ item }) {
  return (
    <div>
      <div className='card'>
        <div className='num-display'>{item.rating}</div>
        <div className='text-display'>{item.text}</div>
      </div>
    </div>
  );
}

export default FeedbackItem;
