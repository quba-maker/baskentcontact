import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import './SocialMedia.css';

const SocialMedia = () => {
  return (
    <section className="social-section section">
      <div className="container">
        <div className="section-header text-center">
          <h2>Sosyal Medyada Bizi Takip Edin!</h2>
        </div>
        
        <div className="social-grid">
          {/* Yabancı Sayfalar */}
          <div className="social-group">
            <h3>Uluslararası Sayfalarımız</h3>
            <div className="social-links">
              <a href="https://www.instagram.com/baskenthealth_konya/" target="_blank" rel="noopener noreferrer" className="social-card instagram">
                <Instagram size={28} />
                <span>Instagram</span>
              </a>
              <a href="https://www.facebook.com/baskenthealthkonya" target="_blank" rel="noopener noreferrer" className="social-card facebook">
                <Facebook size={28} />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Türkçe Sayfalar */}
          <div className="social-group">
            <h3>Türkçe Sayfalarımız</h3>
            <div className="social-links">
              <a href="https://www.instagram.com/baskenthastanesi_konya/" target="_blank" rel="noopener noreferrer" className="social-card instagram">
                <Instagram size={28} />
                <span>Instagram</span>
              </a>
              <a href="https://www.facebook.com/konyaabaskent" target="_blank" rel="noopener noreferrer" className="social-card facebook">
                <Facebook size={28} />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
