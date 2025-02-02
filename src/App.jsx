import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { scrapedData } from './data';
import DataGrid from './components/DataGrid';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
{/*         <Route path="/" element={<LandingPage />} /> */}
        <Route path="/" element={
          <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
            <DataGrid data={scrapedData} />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
