import { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import FooterComponent from './components/Footer/FooterComponent';
import HeaderComponent from './components/Header/HeaderComponent';
import SpinnerComponent from './components/Spinner/SpinnerComponent';

const HomeView = lazy(() => import('./views/Home/HomeView'));
const AboutView = lazy(() => import('./views/About/AboutView'));
const FinancialView = lazy(() => import('./views/Financial/FinancialView'));

function App() {
  return (
    <Router>
      <div className="container">
        <HeaderComponent />
        <Suspense fallback={<SpinnerComponent />}>
          <div className="content_height_adjuster">
            <Routes>
              <Route path="/" element={<HomeView />} exact />
              <Route path="/about" element={<AboutView />} exact />
              <Route path="/financial" element={<FinancialView />} exact />
            </Routes>
          </div>
        </Suspense>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
