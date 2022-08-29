import { Routes, Route } from 'react-router-dom';
import { Footer, Header } from './components/common';
import { GeneralCalculator } from './components/calculators';

function App() {
  return (
    <>
      <Header />
      <GeneralCalculator />
      <Footer />
    </>
  );
}

export default App;
