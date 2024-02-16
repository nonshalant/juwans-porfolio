import './App.css';
import Landing from './components/landingPage/Landing';
import Modal from './components/modal/Modal';
import { Routes, Route} from 'react-router-dom';
import About from './components/About/About';
import Navigation from './components/navigation/Navigation';
import { useState } from 'react';

function App() {

  const [displayNav, setDisplayNav] = useState(false)

  return (
    <div className="App">
      <Navigation setDisplayNav={setDisplayNav} displayNav={displayNav} />
      <Routes>
        <Route 
          path='/' 
          element={<Landing />}>
        </Route>
        <Route 
          path='/about' 
          element={<About />}>
        </Route>
        <Route 
          path='/:imageId' 
          element={<Modal/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
