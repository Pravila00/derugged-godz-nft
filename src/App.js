import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Faq from './components/Faq';
import Footer from './components/Footer';
var Snow = require('react-snow-effect');
var backgroundColor = "background-color:#21232C;";

export default function App() {
  return (
    <div id="app">
      <Snow />
      <Header/>
      <Home/>
      <hr/>
      <Roadmap/>
      <hr/>
      <Team/>
      <hr/>
      <Faq></Faq>
      <hr/>
      <Footer/>
    </div>
  );
}
