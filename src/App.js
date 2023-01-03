import React from 'react'
import Header from './Header'
import './App.css';

function App() {
  return (<Header name="Company" links={["sobre", "comprar", "Contato"]}></Header>)
}

export default App;
