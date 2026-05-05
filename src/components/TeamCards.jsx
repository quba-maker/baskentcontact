import React from 'react';
import { UserPlus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './TeamCards.css';

import imgOmer from '../assets/crew/dr-omer-ali-kerkuklu.webp';
import imgErcan from '../assets/crew/ercan-zeki-gedik-182026-101549-am.webp';
import imgRoaa from '../assets/crew/roaa-saad-aldin-182026-101630-am.webp';

const TeamCards = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Ömer Ali Kerküklü',
      firstName: 'Ömer Ali',
      lastName: 'Kerküklü',
      prefix: 'Dr.',
      title: t('team.title_omer'),
      phone: '+905010154242',
      email: 'dromerali@konyabaskenthospital.com',
      imageUrl: imgOmer,
    },
    {
      id: 2,
      name: 'Ercan Zeki Gedik',
      firstName: 'Ercan Zeki',
      lastName: 'Gedik',
      prefix: '',
      title: t('team.title_ercan'),
      phone: '+905520124242',
      email: 'ezgedik@baskent.edu.tr',
      imageUrl: imgErcan,
    },
    {
      id: 3,
      name: "Roa'a Sa'ad Aldin",
      firstName: "Roa'a",
      lastName: "Sa'ad Aldin",
      prefix: '',
      title: t('team.title_roaa'),
      phone: '+905527641397',
      email: 'konyaipd@baskent.edu.tr',
      imageUrl: imgRoaa,
    }
  ];

  const generateVCard = (member) => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:${member.lastName};${member.firstName};;${member.prefix};
FN:${member.name}
ORG:${t('team.org')}
TITLE:${member.title}
TEL;TYPE=CELL,VOICE:${member.phone}
EMAIL;TYPE=WORK,INTERNET:${member.email}
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${member.name.replace(/\s+/g, '_')}.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="team-section section bg-light">
      <div className="container">
        <div className="section-header text-center">
          <h2>{t('team.title')}</h2>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className="team-card glass animate-fade-in" 
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className="card-image">
                <img src={member.imageUrl} alt={member.name} />
              </div>
              <div className="card-info">
                <h3>{member.name}</h3>
                <p className="title">{member.title}</p>
                <div className="card-actions">
                  <button 
                    className="btn btn-primary btn-full"
                    onClick={() => generateVCard(member)}
                  >
                    <UserPlus size={18} />
                    {t('team.btn_vcard')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCards;
