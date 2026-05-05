import React from 'react';
import { Activity, HeartPulse, Heart, Smile, Stethoscope, Microscope, Dna, Syringe, Eye, Baby, Sparkles, Droplets, Scissors, Bug, Wind, Scan } from 'lucide-react';
import './Services.css';

const services = [
  { id: 1, title: 'Orthopedics & Traumatology', description: 'Comprehensive diagnosis and treatment for musculoskeletal disorders.', icon: <Activity size={28} /> },
  { id: 2, title: 'Neurosurgery', description: 'When pain starts controlling your life… we are here to give you back control.', icon: <Activity size={28} /> },
  { id: 3, title: 'Cardiology', description: 'High level clinic, academic and scientific services.', icon: <HeartPulse size={28} /> },
  { id: 4, title: 'Cardiovascular Surgery', description: 'Cardiovascular surgery services with modern techniques.', icon: <Heart size={28} /> },
  { id: 5, title: 'Dentistry & Oral Surgery', description: 'Diagnosis, routine tooth extraction and surgical applications.', icon: <Smile size={28} /> },
  { id: 6, title: 'Otolaryngology', description: 'Modern diagnostic and treatment procedures for ear, nose and throat.', icon: <Stethoscope size={28} /> },
  { id: 7, title: 'Radiology', description: 'Health services and training in Neuroradiology, interventional radiology.', icon: <Scan size={28} /> },
  { id: 8, title: 'Pathology', description: 'Pathologic evaluation is the gold standard for the diagnosis of tumors.', icon: <Microscope size={28} /> },
  { id: 9, title: 'Genetics', description: 'Diagnosis, follow up and treatment of hereditary diseases.', icon: <Dna size={28} /> },
  { id: 10, title: 'Anesthesiology & Reanimation', description: 'Safe medical implementations that are developed for surgeries.', icon: <Syringe size={28} /> },
  { id: 11, title: 'Ophthalmology', description: 'Cornea-contact lens, refractive surgery, uvea, glaucoma treatments.', icon: <Eye size={28} /> },
  { id: 12, title: 'Pediatric Surgery', description: 'Handles the congenital problems of the newborns.', icon: <Baby size={28} /> },
  { id: 13, title: 'Dermatology', description: 'Diagnosis and Treatment of hair and scalp and skin diseases.', icon: <Sparkles size={28} /> },
  { id: 14, title: 'Obstetrics and Gynecology', description: 'Diagnosis, follow up and treatment for high risk pregnancies.', icon: <Baby size={28} /> },
  { id: 15, title: 'Urology', description: 'Modern urologic applications and Stone Crushing Unit.', icon: <Droplets size={28} /> },
  { id: 16, title: 'Aesthetic, Plastic & Reconstructive', description: 'Reconstruction operations for almost all of the human body.', icon: <Scissors size={28} /> },
  { id: 17, title: 'Thoracic Surgery', description: 'Comprehensive care for adult and pediatric patients.', icon: <Activity size={28} /> },
  { id: 18, title: 'General Surgery', description: 'Diagnosis and treatment with the recent scientific knowledge.', icon: <Scissors size={28} /> },
  { id: 19, title: 'Radiation Oncology', description: 'Uses high-energy radiation to kill cancer cells.', icon: <Activity size={28} /> },
  { id: 20, title: 'Infectious Disease', description: 'Diagnosis and treatment of infectious diseases.', icon: <Bug size={28} /> },
  { id: 21, title: 'Pulmonary Diseases', description: 'Treatments for diseases developed in air passages and lungs.', icon: <Wind size={28} /> }
];

const Services = () => {
  return (
    <section className="services-section section">
      <div className="container">
        <div className="section-header text-center">
          <h2>Uzmanlık Alanlarımız</h2>
          <p>Alanında deneyimli hekimlerimizle sunduğumuz başlıca hizmetler.</p>
        </div>
        
        <div className="services-carousel">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card glass animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.05}s` }}
            >
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
