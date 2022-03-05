import { CssBaseline } from '@material-ui/core';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {
  return (

    <>
      <CssBaseline />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<Portfolio />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>

    </>
  );
}

export default App;
