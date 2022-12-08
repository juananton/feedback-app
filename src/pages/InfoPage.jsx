import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

function InfoPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About this project</h1>
        <p>This is a React app to leave feedback for a product or service</p>
      </div>
      <p>
        <Link to='/'>← Back to home</Link>
      </p>
    </Card>
  );
}

export default InfoPage;
