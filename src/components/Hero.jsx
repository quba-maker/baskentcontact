import React from 'react';
import { Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero section">
      <div className="container hero-content text-center">
        <h1 className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {t('hero.title1')}<span className="text-gradient">{t('hero.title_highlight')}</span>{t('hero.title2')}
        </h1>
        <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {t('hero.subtitle')}
        </p>
        <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <a href="#lead-form" className="btn btn-primary btn-lg">
            <Calendar size={20} />
            {t('hero.btn_form')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
