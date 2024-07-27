import './App.scss';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

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

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

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
          </Routes>
        </Router>
        {/* Inserer votre contenu ici */}
      </div>
    </div>
  );
}

export default App;
