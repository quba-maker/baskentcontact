import React from 'react';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './ContactFooter.css';

const ContactFooter = () => {
  const { t } = useTranslation();
  const address = "Hocacihan Mahallesi Saray Caddesi No:1 Selçuklu/ KONYA";
  const mapsLink = "https://maps.google.com/?q=Başkent+Hastanesi+Konya";

  return (
    <footer className="footer bg-light">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <h3 className="footer-title">{t('footer.title')}</h3>
            <p className="footer-desc">
              {t('footer.desc')}
            </p>
          </div>
          
          <div className="footer-contact">
            <h3 className="footer-title">{t('footer.contact_title')}</h3>
            <ul className="contact-list">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>{address}</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <a href="tel:+905010154242">+90 501 015 42 42</a>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <a href="mailto:konyaipd@baskent.edu.tr">konyaipd@baskent.edu.tr</a>
              </li>
            </ul>
            
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mt-16" style={{ marginTop: '16px' }}>
              <Navigation size={18} />
              {t('footer.get_directions')}
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {t('footer.title')}. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
