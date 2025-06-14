import Hero from './components/herosection';
import Contact from './components/contact';
import Footer from './components/footer';
import Projects from './components/projects';
import Skills from './components/skills';
import Navbar from "./components/nav";

import React from 'react';

function App() {
  return (
    <main>
      <Navbar/>
      <Hero />
      <Skills/>
      <Projects/>
      <Contact />
      <Footer/>
    </main>
  );
}

export default App;
