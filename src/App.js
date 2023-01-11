import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactPage from './pages/Contactpage';
import Footer from './components/Footer';
import AboutPage from './pages/Aboutpage';
import StarsPage from './pages/Starspage';
import AgregarPage from './pages/Agregarpage';
import BirthPage from './pages/Birthpage';
import HomePage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Router>{/*facilita el enrutamiento de las páginas*/}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/birth" element={<BirthPage />} />
          <Route path="/agregar" element={<AgregarPage />} />
          <Route path="/stars" element={<StarsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
      <h1>Hello Kruger Star</h1>
    </div>
  );
}

export default App;
