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

  const [itemEdit, setItemEdit] = useState({
    item: {},
    edit: false,
  });

  // Add feedback item
  const addItem = newItem => {
    newItem.id = uuidv4();
    setList([newItem, ...list]);
  };

  // Delete feedback item
  const deleteItem = id => {
    if (window.confirm('Are you sure you want to delete?')) {
      setList(list.filter(item => item.id !== id));
    }
  };

  // Edit feedback item
  const editItem = item => {
    setItemEdit({
      item,
      edit: true,
    });
  };

  // Update feedback item
  const updateItem = (id, updatedItem) => {
    setList(
      list.map(item => (item.id === id ? { ...item, ...updatedItem } : item))
    );
    setItemEdit({
      edit: false,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        list,
        itemEdit,
        addItem,
        deleteItem,
        editItem,
        updateItem,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
