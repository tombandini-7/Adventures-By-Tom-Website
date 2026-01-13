import { Routes, Route } from 'react-router-dom';
import { HomePage, WaltDisneyWorldPage } from './pages';
import { useAnalytics } from './hooks/useAnalytics';

function App() {
  // Initialize analytics tracking (page views, scroll depth)
  useAnalytics();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/walt-disney-world" element={<WaltDisneyWorldPage />} />
    </Routes>
  );
}

export default App;
