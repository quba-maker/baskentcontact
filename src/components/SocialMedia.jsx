import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logoImage from '../assets/baskent-logo.svg';
import drOmerAliImg from '../assets/crew/dr-omer-ali-kerkuklu.webp';
import './SocialMedia.css';

const ProfileCard = ({ platform, handle, name, bio, link, followers, posts, following, avatarImage, coverImage }) => {
  const { t } = useTranslation();
  const isInsta = platform === 'instagram';
  const Icon = isInsta ? Instagram : Facebook;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={`profile-card ${platform} ${coverImage ? 'has-cover' : ''}`}>
      {coverImage && (
        <div className="profile-cover">
          <img src={coverImage} alt={name} />
        </div>
      )}
      <div className={`profile-header ${coverImage ? 'with-cover' : ''}`}>
        <div className={`profile-avatar ${avatarImage ? 'avatar-photo' : ''}`}>
          <img src={avatarImage || logoImage} alt={avatarImage ? name : 'Başkent Logo'} />
        </div>
        <div className="profile-stats">
          <div className="profile-handle-row">
            <span className="profile-handle">{handle}</span>
            <Icon size={18} fill={isInsta ? "none" : "currentColor"} className="platform-icon" />
          </div>
          <div className="stats-row">
            {posts && <div className="stat"><strong>{posts}</strong><span>gönderi</span></div>}
            <div className="stat"><strong>{followers}</strong><span>takipçi</span></div>
            {following && <div className="stat"><strong>{following}</strong><span>takip</span></div>}
          </div>
        </div>
      </div>
      <div className="profile-bio">
        <strong>{name}</strong>
        <p>{bio}</p>
      </div>
      <div className="profile-action">
        {t('social.btn')}
      </div>
    </a>
  );
};

const SocialMedia = () => {
  const { t } = useTranslation();

  return (
    <section className="social-section section">
      <div className="container">
        <div className="section-header text-center">
          <h2>{t('social.title')}</h2>
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
            name="Baskent Konya Hospital"
            bio="International Patient Department"
            link="https://www.facebook.com/baskenthealthkonya"
            followers="114 B"
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
            name="Başkent Hastanesi Konya Uygulama ve Araştırma Merkezi"
            bio="Hastane"
            link="https://www.facebook.com/konyaabaskent"
            followers="2,4 B"
          />
          <ProfileCard 
            platform="instagram"
            handle="dromeralii"
            name="Ömer Ali Kerküklü"
            bio="Konya Baskent University Hospital / International Patient Department Medical Director"
            link="https://www.instagram.com/dromeralii/"
            posts="97"
            followers="13,1 B"
            following="2.318"
            avatarImage={drOmerAliImg}
            coverImage={drOmerAliImg}
          />
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
