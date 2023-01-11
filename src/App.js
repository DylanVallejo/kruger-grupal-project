
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import MyStars from './pages/MyStars';
import Contact from './pages/Contact';
import OneStar from "./pages/OneStar"
// import Main from './components/Main';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/my-stars' element={<MyStars />} />
      <Route path='/one-star' element={<OneStar />} />
    </Routes>
  );
}

export default App;
