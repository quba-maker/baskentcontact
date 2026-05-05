import React from 'react';
import { Calendar } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero section">
      <div className="container hero-content text-center">
        <h1 className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Sağlığınız İçin <span className="text-gradient">Bir Telefon Kadar</span> Yakınız
        </h1>
        <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Başkent Hastanesi Konya ekibi olarak, tedavi sürecinizin her adımında yanınızdayız. Özel danışmanlarınızı hemen rehberinize ekleyin veya doğrudan iletişime geçin.
        </p>
        <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <a href="#lead-form" className="btn btn-primary btn-lg">
            <Calendar size={20} />
            Hızlı Randevu Al
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
