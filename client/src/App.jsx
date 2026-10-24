import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import PuppiesPage from './pages/PuppiesPage.jsx';
import PuppyDetailPage from './pages/PuppyDetailPage.jsx';
import HappyFamiliesPage from './pages/HappyFamiliesPage.jsx';
import HowItWorksPage from './pages/HowItWorksPage.jsx';
import FaqPage from './pages/FaqPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import GoneHomePage from './pages/GoneHomePage.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="puppies" element={<PuppiesPage />} />
        <Route path="puppies/:slug" element={<PuppyDetailPage />} />
        <Route path="happy-families" element={<HappyFamiliesPage />} />
        <Route path="how-it-works" element={<HowItWorksPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="gone-home" element={<GoneHomePage />} />
      </Route>
    </Routes>
  );
}