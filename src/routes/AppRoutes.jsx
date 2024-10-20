import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import GraphPage from '../pages/GraphPage';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graph" element={<GraphPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
