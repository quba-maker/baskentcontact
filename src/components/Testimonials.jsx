import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    title: 'A New Smile for Layan After Full Dental Treatment',
    text: 'Layan arrived at Başkent University Konya Hospital with her family, suffering from advanced dental issues, including deep cavities.',
    imageUrl: 'https://images.unsplash.com/photo-1517856497829-3047e3fffae1?auto=format&fit=crop&q=80&w=300&h=300',
    rating: 5
  },
  {
    id: 2,
    title: 'Successful Treatment of Restrictive Cardiomyopathy',
    text: 'In an inspiring story of hope, Başkent Konya Hospital successfully treated a child with a rare heart condition.',
    imageUrl: 'https://images.unsplash.com/photo-1504198458649-3128b932f49e?auto=format&fit=crop&q=80&w=300&h=300',
    rating: 5
  },
  {
    id: 3,
    title: 'From the Netherlands to Konya A Patient Regains Mobility',
    text: 'A patient from the Netherlands found relief at Başkent Konya Hospital through a modern treatment combining minimally invasive techniques.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300',
    rating: 5
  },
  {
    id: 4,
    title: 'Transferred by Ambulance from Iraq- A Baby Survives',
    text: 'An infant transferred urgently from Iraq by ambulance received life-saving heart surgery at Başkent Konya Hospital.',
    imageUrl: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=300&h=300',
    rating: 5
  },
  {
    id: 5,
    title: 'A Surgical Decision That Ended the Pain',
    text: 'Our patient arrived from Germany at Başkent University Konya Hospital after experiencing prolonged discomfort.',
    imageUrl: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=300&h=300',
    rating: 5
  },
  {
    id: 6,
    title: 'A New Step in a Journey of Hope',
    text: 'Our 10-year-old patient from Niger has successfully completed the stem cell therapy phase as part of a comprehensive treatment.',
    imageUrl: 'https://images.unsplash.com/photo-1601288496920-b6154fe3626a?auto=format&fit=crop&q=80&w=300&h=300',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section section bg-light">
      <div className="container">
        <div className="section-header text-center">
          <h2>Mutlu Hastalarımız</h2>
          <p>Bizimle sağlığına kavuşan misafirlerimizin deneyimleri.</p>
        </div>
        
        <div className="testimonials-carousel">
          {testimonials.map((item, index) => (
            <div 
              key={item.id} 
              className="testimonial-card glass"
            >
              <div className="testimonial-image">
                <img src={item.imageUrl} alt={item.title} />
              </div>
              <div className="stars">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
                ))}
              </div>
              <h3 className="testimonial-title">{item.title}</h3>
              <p className="testimonial-text">"{item.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
