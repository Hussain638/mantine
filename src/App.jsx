import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutWrapper from './Components/Layout/LayoutWrapper';
import Dashboard from './pages/Dashboard';
import Ecommerce from './pages/Ecommerce';
import NotFoundPage from './Components/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutWrapper />}>
        <Route path="analytics" element={<Dashboard />} />    
          <Route path="ecommerce" element={<Ecommerce />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </BrowserRouter>
  );
}
