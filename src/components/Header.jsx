import React from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';

import logoImage from '../assets/baskent-logo.svg';

const Header = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header glass">
      <div className="container header-content">
        <div className="logo-area">
          <img src={logoImage} alt="Başkent Hastanesi Logo" className="logo-image" />
        </div>
        <div className="lang-switcher">
          <button 
            className={`lang-btn ${i18n.language === 'tr' ? 'active' : ''}`} 
            onClick={() => changeLanguage('tr')}
          >
            TR
          </button>
          <span className="lang-sep">|</span>
          <button 
            className={`lang-btn ${i18n.language === 'fr' ? 'active' : ''}`} 
            onClick={() => changeLanguage('fr')}
          >
            FR
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
