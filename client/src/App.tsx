import { Routes, Route } from 'react-router-dom';
import { GeneralCal } from './components/calculators';

function App() {
  return (
    <>
      <Routes>
        <Route path="generalCal" element={<GeneralCal />} />
      </Routes>
    </>
  );
}

export default App;
