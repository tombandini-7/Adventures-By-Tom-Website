import { Routes, Route } from 'react-router-dom';
import { HomePage, WaltDisneyWorldPage, DisneyCruiseLinePage, DisneylandPage } from './pages';
import { useAnalytics } from './hooks/useAnalytics';

function App() {
  // Initialize analytics tracking (page views, scroll depth)
  useAnalytics();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/walt-disney-world" element={<WaltDisneyWorldPage />} />
      <Route path="/disney-cruise-line" element={<DisneyCruiseLinePage />} />
      <Route path="/disneyland" element={<DisneylandPage />} />
    </Routes>
  );
}

export default App;
