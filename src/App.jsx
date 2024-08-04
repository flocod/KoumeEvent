import './App.scss';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LeaderCamp from './pages/LeaderCamp';

import Galery from './pages/Galery'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    // Récupérer le thème depuis le localStorage ou utiliser false par défaut
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' ? true : false;
  });

  useEffect(() => {
    // Mettre à jour le localStorage lorsque le thème change
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  // const toggleTheme = () => {
  //   setIsDarkTheme(!isDarkTheme);
  // };

  return (
    <div className={`App-container ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className="linearGrid">
        <div></div>

        <div>
        </div>

        <div>

        </div>

        <div>

        </div>

        <div>

        </div>

        <div></div>
        <div></div>
      </div>
      <div className="wrapper">
        {/* Inserer votre contenu ici */}

        {/* 
        <button onClick={toggleTheme}>
          {isDarkTheme ? 'Passer au thème clair' : 'Passer au thème sombre'}
        </button> */}
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/leader" element={<LeaderCamp />} />
            <Route path="/leader/gallery" element={<Galery />} />
          </Routes>
        </Router>


        <div className="footer">
          <div className="copyright">
            © Koume {(new Date()).getFullYear()} .Tous droits réservés
          </div>

          <ul className="socials">
            <li><a href="https://www.youtube.com/@ZTFMINISTRY/streams" target='blank'>YouTube</a></li>
            <li><a href="http://" target='blank'>Facebook</a></li>
            <li><a href="https://www.instagram.com/p/C93LV2FRavX/?igsh=MTllOHNmOXBmMmljbg==" target='blank'>Instagram</a></li>
          </ul>

          <div className="developer">
            Made with love by <a href='https://flocod.vercel.app' className="site" target='blank'>flocod</a>
          </div>

        </div>

        {/* Inserer votre contenu ici */}
      </div>
    </div>
  );
}

export default App;
