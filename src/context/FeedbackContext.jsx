import { createContext, useEffect, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsloading] = useState(true);
  const [list, setList] = useState([]);

  const [itemEdit, setItemEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    getData();
  }, []);

  // Fetch data
  const getData = async () => {
    try {
      const response = await fetch(
        'http://localhost:5000/data?_sort=id&_order=desc'
      );
      const data = await response.json();

      setList(data);
      setIsloading(false);
    } catch (error) {
      console.error(error);
    }
  };

  // Add feedback item
  const addItem = async item => {
    try {
      const response = await fetch('http://localhost:5000/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });
      const data = await response.json();

      setList([data, ...list]);
    } catch (error) {
      console.error(error);
    }
  };

  // Delete feedback item
  const deleteItem = async id => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`http://localhost:5000/data/${id}`, {
        method: 'DELETE',
      });
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
  const updateItem = async (id, updatedItem) => {
    const response = await fetch(`http://localhost:5000/data/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    });
    const data = await response.json();

    setList(list.map(item => (item.id === id ? { ...item, ...data } : item)));
    setItemEdit({
      edit: false,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        list,
        itemEdit,
        isLoading,
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
