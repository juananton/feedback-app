import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';

import FeedbackDataSource from './data/FeedbackDataSource';
import AboutIconLink from './components/AboutIconLink';

function App() {
  const [feedbackData, setFeedbackData] = useState(FeedbackDataSource);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedbackData([newFeedback, ...feedbackData]);
  };

  const deleteFeedbackItem = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedbackData(feedbackData.filter((item) => item.id !== id));
    }
  };

  return (
    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedbackListData={feedbackData} />
                <FeedbackList
                  feedbackListData={feedbackData}
                  handleDelete={deleteFeedbackItem}
                />
                <AboutIconLink />
              </>
            }
          ></Route>
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
