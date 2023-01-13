import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mystarspage from './pages/Mystarspage';
import Homepage from './pages/Homepage';
import Agregarpage from './pages/Agregarpage';
import Birthpage from './pages/Birthpage';
import Familystarspage from './pages/Familystarspage';
import Onestarpage from './pages/Onestarpage';
import Aboutpage from './pages/Aboutpage';
import Contactpage from './pages/Contactpage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import store from './app/store'
import { Provider } from 'react-redux'


function App() {
  return (
    <Provider store={store}>
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/birth" element={<Birthpage />} />
        <Route path="/agregar" element={<Agregarpage />} />
        <Route path="/my-stars" element={<Mystarspage />} />
        <Route path="/family-stars" element={<Familystarspage />} />
        <Route path="/one-star" element={<Onestarpage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;
