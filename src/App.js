import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Waitlist from './pages/waitlist'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/waitlist' element={<Waitlist />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
