import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';
import PageD from './pages/PageD';
import Navbariot from './components/Navbariot';

export default function App() {
  return (
    <BrowserRouter>
      <Navbariot />
      <Routes>
        <Route path="/" element={<PageA />} />
        <Route path="/pageb" element={<PageB />} />
        <Route path="/pagec" element={<PageC />} />
        <Route path="/paged" element={<PageD />} />
      </Routes>
    </BrowserRouter>
  );
}
