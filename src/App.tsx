import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Landing from './components/Landing';

function App() {
  return (
    <>
      <Sidebar/>
      <TopBar/>
      <Landing/>
    </>
  );
}

export default App;
