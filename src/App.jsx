import React from 'react';
import Header from './components/header';
import bannerDesk from './assets/images/hero-desktop.jpg';
import bannerMobile from './assets/images/hero-mobile.jpg';
import logo from './assets/images/logo.svg';
import './App.css'

function App() {

  return (
    <div>
       <nav>
          <img src={logo} alt='base apparel logo page'/>
       </nav>
       <main>
       <div id="banner-container">
       <img src={bannerMobile} alt='banner' id='mobile'/>
          <img src={bannerDesk} alt='banner' id='desk' />
       </div>
          <Header/>
       </main>
    </div>
  )
}

export default App
