import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import './LeadForm.css';

const LeadForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      // Here you would typically send data to an API/backend
      setIsSubmitted(true);
      // WhatsApp'a yönlendirerek veriyi ulaştırıyoruz (Backend olmadığı için en sağlıklı yöntem)
      const whatsappMsg = `*YENİ FORM TALEBİ*\n\n*Ad Soyad:* ${formData.name}\n*Telefon:* ${formData.phone}\n\nMerhaba, sağlık danışmanlığı hakkında bilgi almak istiyorum.`;
      window.open(`https://wa.me/905527641397?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
    }
  };

  return (
    <section id="lead-form" className="lead-section section">
      <div className="container">
        <div className="lead-container glass animate-fade-in">
          {isSubmitted ? (
            <div className="success-state">
              <CheckCircle2 size={64} color="#25D366" />
              <h3>Talebiniz Alındı!</h3>
              <p>Sağlık danışmanlarımız en kısa sürede sizinle iletişime geçecektir.</p>
            </div>
          ) : (
            <div className="form-state">
              <div className="form-header text-center">
                <h2>Biz Sizi Arayalım</h2>
                <p>İletişim bilgilerinizi bırakın, uzmanlarımız size özel tedavi planı için hemen ulaşsın.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="lead-form">
                <div className="input-group">
                  <input 
                    type="text" 
                    placeholder="Adınız Soyadınız" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="input-group">
                  <input 
                    type="tel" 
                    placeholder="Telefon Numaranız" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-full">
                  <Send size={18} />
                  Gönder
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
