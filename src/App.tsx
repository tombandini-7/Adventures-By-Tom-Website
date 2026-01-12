import { Routes, Route } from 'react-router-dom';
import { HomePage, WaltDisneyWorldPage } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/walt-disney-world" element={<WaltDisneyWorldPage />} />
    </Routes>
  );
}

export default App;
