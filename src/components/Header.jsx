import React from 'react';
import { ShieldCheck } from 'lucide-react';
import './Header.css';

import logoImage from '../assets/baskent-logo.svg';

const Header = () => {
  return (
    <header className="header glass">
      <div className="container header-content">
        <div className="logo-area">
          <img src={logoImage} alt="Başkent Hastanesi Logo" className="logo-image" />
        </div>
      </div>
    </header>
  );
};

export default Header;
