import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [list, setList] = useState([
    {
      id: 1,
      rating: 5,
      text: 'This is feeback item 1',
    },
    {
      id: 2,
      rating: 4,
      text: 'This is feeback item 2',
    },
    {
      id: 3,
      rating: 2,
      text: 'This is feeback item 3',
    },
  ]);

  const addItem = newItem => {
    newItem.id = uuidv4();
    setList([newItem, ...list]);
  };

  const deleteItem = id => {
    if (window.confirm('Are you sure you want to delete?')) {
      setList(list.filter(item => item.id !== id));
    }
  };

  return (
    <FeedbackContext.Provider value={{ list, addItem, deleteItem }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
