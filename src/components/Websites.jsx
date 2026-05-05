import React from 'react';
import { Globe, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Websites.css';

const Websites = () => {
  const { t } = useTranslation();

  return (
    <section className="websites-section section bg-light">
      <div className="container">
        <div className="section-header text-center">
          <h2>{t('websites.title')}</h2>
          <p>{t('websites.subtitle')}</p>
        </div>
        
        <div className="websites-grid">
          <a href="https://konyabaskenthospital.com" target="_blank" rel="noopener noreferrer" className="website-card">
            <div className="website-icon">
              <Globe size={28} />
            </div>
            <div className="website-content">
              <h3>{t('websites.int_title')}</h3>
              <p>konyabaskenthospital.com</p>
            </div>
            <ExternalLink size={20} className="external-icon" />
          </a>
          
          <a href="https://konya.baskenthastaneleri.com/" target="_blank" rel="noopener noreferrer" className="website-card">
            <div className="website-icon">
              <Globe size={28} />
            </div>
            <div className="website-content">
              <h3>{t('websites.local_title')}</h3>
              <p>konya.baskenthastaneleri.com</p>
            </div>
            <ExternalLink size={20} className="external-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Websites;
