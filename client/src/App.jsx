import "../App.css";
import { Route, Routes } from 'react-router-dom'
import PortfolioLayout from './layouts/PortfolioLayout'
import About from './pages/About'
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import LandingPage from './pages/LandingPage';
import CertificatePage from "./pages/CertificatePage";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PortfolioLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificate" element={<CertificatePage/>} />
      </Route>
    </Routes>
  );
}

export default App