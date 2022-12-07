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
          'content-type': 'application/json',
        },
        body: JSON.stringify(item),
      });
      console.log(response.body);
      const data = await response.json();

      setList([data, ...list]);
    } catch (error) {
      console.error(error);
    }
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
