import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATH } from './constants';
import { CoveragePeriodsPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.COVERAGE_PERIODS} element={<CoveragePeriodsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
