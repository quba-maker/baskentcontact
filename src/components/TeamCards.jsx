import React from 'react';
import { UserPlus, Phone } from 'lucide-react';
import './TeamCards.css';

import imgOmer from '../assets/crew/dr-omer-ali-kerkuklu.webp';
import imgErcan from '../assets/crew/ercan-zeki-gedik-182026-101549-am.webp';
import imgRoaa from '../assets/crew/roaa-saad-aldin-182026-101630-am.webp';

// Mock data for the team
const teamMembers = [
  {
    id: 1,
    name: 'Dr. Ömer Ali Kerküklü',
    firstName: 'Ömer Ali',
    lastName: 'Kerküklü',
    prefix: 'Dr.',
    title: 'Uluslararası Hasta Departmanı Medikal Direktörü / Doktor',
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
    title: 'Uluslararası Hasta Koordinatörü / Hastane Müdür Yardımcısı',
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
    title: 'Uluslararası Hasta Danışmanı / Yönetici Asistanı',
    phone: '+905527641397',
    email: 'konyaipd@baskent.edu.tr',
    imageUrl: imgRoaa,
  }
];

const generateVCard = (member) => {
  // vCard formatında Türkçe karakter ve boşluk hatalarını en aza indiren standart yapı
  const vCardData = `BEGIN:VCARD
VERSION:3.0
N:${member.lastName};${member.firstName};;${member.prefix};
FN:${member.name}
ORG:Başkent Hastanesi Konya
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

const TeamCards = () => {
  return (
    <section className="team-section section bg-light">
      <div className="container">
        <div className="section-header text-center">
          <h2>Uluslararası Hasta Departmanı Yöneticilerimiz</h2>
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
                    Rehbere Ekle
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
