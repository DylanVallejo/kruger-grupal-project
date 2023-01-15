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
import SingIn from "./pages/SingIn"
import SingUp from "./pages/SingUp"
import { AuthContextProvider } from "./context/AuthContext"

import store from './app/store'
import { Provider } from 'react-redux'
import ProtectRoutes from './components/ProtectRoutes';


function App() {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/birth" element={<Birthpage />} />
            <Route path="/agregar" element={<Agregarpage />} />
            <Route path="/my-stars" element={<ProtectRoutes><Mystarspage /></ProtectRoutes>} />
            <Route path="/family-stars" element={<ProtectRoutes><Familystarspage /></ProtectRoutes>} />
            <Route path="/one-star" element={<Onestarpage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/contact" element={<Contactpage />} />
            <Route path="/sing-in" element={<SingIn />} />
            <Route path="/sing-up" element={<SingUp />} />
          </Routes>
          <Footer />
        </Router>
      </AuthContextProvider>

    </Provider>
  );
}

export default App;
