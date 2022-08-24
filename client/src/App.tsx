import { Routes, Route } from 'react-router-dom';
import { Footer, Header } from './components/common';
import { GeneralCal } from './components/calculators';

function App() {
  return (
    <>
      <Header />
      <GeneralCal />
      <Footer />
    </>
  );
}

export default App;
