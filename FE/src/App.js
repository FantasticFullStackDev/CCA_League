import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Landing from './components/landing/landing';
import Main from './components/main/main';
import PageNotFound from './components/pagenotfound/pagenotfound';
import './App.css';

const App = () => {
    return (
      <div className='app'>
        <div className='main_container'>
          <Header/>
          <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/main/*' element={<Main />} />
              <Route path='/*' element={<PageNotFound />} />
          </Routes> 
        </div>
      </div>
    );
}

export default App;