import React from 'react';
import { BedDouble, Users, Stethoscope, Award } from 'lucide-react';
import './Stats.css';

const statsData = [
  {
    id: 1,
    icon: <BedDouble size={32} />,
    number: '1555',
    label: 'Yatak Kapasitesi'
  },
  {
    id: 2,
    icon: <Users size={32} />,
    number: '9999+',
    label: 'Mutlu Hasta'
  },
  {
    id: 3,
    icon: <Stethoscope size={32} />,
    number: '23.549',
    label: 'Doktor ve Hemşire'
  },
  {
    id: 4,
    icon: <Award size={32} />,
    number: '41',
    label: 'Yıllık Tecrübe'
  }
];

const Stats = () => {
  return (
    <section className="stats-section bg-light">
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat) => (
            <div key={stat.id} className="stat-item glass animate-fade-in">
              <div className="stat-icon">
                {stat.icon}
              </div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
