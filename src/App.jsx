import Header from './components/Header.jsx'
import Map from './components/Map.jsx'
import Info from './components/Info.jsx';
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const id =[50.5, 30.5]

  return (
    <div className="App">
      <Header />
      <Info ip={id} />
      <Map lat={id} />
    </div>
  )
}

export default App
