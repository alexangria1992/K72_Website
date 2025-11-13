import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Agence from './pages/Agence';
import Projects from './pages/Projects';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=' text-white'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/agence' element={<Agence />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
