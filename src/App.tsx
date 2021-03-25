import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ShopContainer from './components/ShopContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <ShopContainer/>
      </div>
      
    </div>
  );
}

export default App;
