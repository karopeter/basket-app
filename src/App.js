import Landingpage from './dashboard/page/landing.component';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Landingpage />} />
     </Routes>
    </>
  );
}

export default App;
