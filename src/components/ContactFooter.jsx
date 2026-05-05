import React from 'react';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import './ContactFooter.css';

const ContactFooter = () => {
  const address = "Hocacihan Mahallesi Saray Caddesi No:1 Selçuklu/ KONYA";
  const mapsLink = "https://maps.google.com/?q=Başkent+Hastanesi+Konya";

  return (
    <footer className="footer bg-light">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <h3 className="footer-title">Başkent Hastanesi Konya</h3>
            <p className="footer-desc">
              Uluslararası standartlarda, kişiye özel sağlık danışmanlığı ve tedavi hizmetleri.
            </p>
          </div>
          
          <div className="footer-contact">
            <h3 className="footer-title">İletişim Bilgileri</h3>
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
              Haritada Yol Tarifi Al
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Başkent Hastanesi Konya. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
