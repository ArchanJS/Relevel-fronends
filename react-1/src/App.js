import React from 'react';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Poke from './components/Poke';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pokemon/:pokename' element={<Poke/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App