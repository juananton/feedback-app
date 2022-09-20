import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackDataSource from './data/FeedbackDataSource';

function App() {
  const [feedbackData, setFeedbackData] = useState(FeedbackDataSource);

  const deleteFeedbackItem = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedbackData(feedbackData.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <div className='container'>
        <Header />
        <FeedbackStats feedbackListData={feedbackData} />
        <FeedbackList
          feedbackListData={feedbackData}
          handleDelete={deleteFeedbackItem}
        />
      </div>
    </>
  );
}

export default App;
