import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import ScrollToTop from '@/components/ScrollToTop';
import BackToTop from '@/components/BackToTop';
import ClickRipple from '@/components/ClickRipple';
import StarryBackground from '@/components/StarryBackground';
import Home from '@/pages/Home';
import Works from '@/pages/Works';
import Contact from '@/pages/Contact';
import ArticleDetail from '@/pages/ArticleDetail';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col relative aurora-bg">
          <ScrollProgress />
          <ClickRipple />
          <StarryBackground starCount={80} meteorCount={2} />
          <Navbar />
          <main className="flex-1 relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/works" element={<Works />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/article/:id" element={<ArticleDetail />} />
            </Routes>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
}
