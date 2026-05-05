import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import logoImage from '../assets/baskent-logo.svg';
import './SocialMedia.css';

const ProfileCard = ({ platform, handle, name, bio, link, followers, posts, following }) => {
  const isInsta = platform === 'instagram';
  const Icon = isInsta ? Instagram : Facebook;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={`profile-card ${platform}`}>
      <div className="profile-header">
        <div className="profile-avatar">
          <img src={logoImage} alt="Başkent Logo" />
        </div>
        <div className="profile-stats">
          <div className="profile-handle-row">
            <span className="profile-handle">{handle}</span>
            <Icon size={18} fill={isInsta ? "none" : "currentColor"} className="platform-icon" />
          </div>
          <div className="stats-row">
            <div className="stat"><strong>{posts}</strong><span>gönderi</span></div>
            <div className="stat"><strong>{followers}</strong><span>takipçi</span></div>
            <div className="stat"><strong>{following}</strong><span>takip</span></div>
          </div>
        </div>
      </div>
      <div className="profile-bio">
        <strong>{name}</strong>
        <p>{bio}</p>
      </div>
      <div className="profile-action">
        Profili Gör
      </div>
    </a>
  );
};

const SocialMedia = () => {
  return (
    <section className="social-section section">
      <div className="container">
        <div className="section-header text-center">
          <h2>Sosyal Medyada Bizi Takip Edin!</h2>
        </div>
        
        <div className="social-grid">
          <ProfileCard 
            platform="instagram"
            handle="baskenthealth_konya"
            name="BAŞKENT UNIVERSITY KONYA HOSPITAL"
            bio="International Patient Department"
            link="https://www.instagram.com/baskenthealth_konya/"
            posts="368"
            followers="11,5 B"
            following="36"
          />
          <ProfileCard 
            platform="facebook"
            handle="baskenthealthkonya"
            name="Başkent Health Group Konya"
            bio="International Patient Department"
            link="https://www.facebook.com/baskenthealthkonya"
            posts="200+"
            followers="5 B"
            following="10"
          />
          <ProfileCard 
            platform="instagram"
            handle="baskenthastanesi_konya"
            name="BAŞKENT ÜNİVERSİTESİ KONYA HASTANESİ"
            bio="Hastane"
            link="https://www.instagram.com/baskenthastanesi_konya/"
            posts="826"
            followers="10,3 B"
            following="12"
          />
          <ProfileCard 
            platform="facebook"
            handle="konyaabaskent"
            name="Başkent Hastanesi Konya"
            bio="Başkent Üniversitesi Konya Uygulama ve Araştırma Merkezi"
            link="https://www.facebook.com/konyaabaskent"
            posts="800+"
            followers="30 B"
            following="12"
          />
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
