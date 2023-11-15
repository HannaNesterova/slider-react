// Import necessary components from react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Carousel from './Carousel';
import Presents from './Presents';

function App() {
  return (
    <div className='main_container'>
      <Router>
        <Routes>
          <Route path='/' element={<Carousel />} />
          <Route path='/presents' element={<Presents />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
