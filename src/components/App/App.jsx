import React from 'react';
import './App.css';
import Home from '../Home/Home';
import Resume from '../Resume/Resume';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Tiffany House-Jimenez</h1>
      </header>
      <nav>
        <a href="#home">About</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>

       
      </nav>
      <nav>
      <a href="https://www.linkedin.com/in/tiffanyhouse-jimenez" target="_blank"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/dewdropsprite" target="_blank"><i className="fab fa-github"></i></a>
      </nav>
      <Home />
      <Projects />
      <Resume />

      <Footer />
    </div>
  );
}

export default App;
