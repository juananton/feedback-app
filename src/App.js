import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackDataSource from './data/FeedbackDataSource';

function App() {
  const [feedbackData, setFeedbackData] = useState(FeedbackDataSource);
  return (
    <>
      <div className='container'>
        <Header />
        <FeedbackList feedbackListData={feedbackData} />
      </div>
    </>
  );
}

export default App;
