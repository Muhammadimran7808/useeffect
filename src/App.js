import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Insta from './components/Insta';
import Mail from './components/Mail';
import Error404 from './components/Error404';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Nested routing */}
          <Route path="/contact" element={<Contact />} >
            <Route index element={<Insta />} />   {/* Default route */}
            <Route path='insta' element={<Insta />} />
            <Route path='mail' element={<Mail />} />
          </Route>

          <Route path="*" element={<Error404 />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
