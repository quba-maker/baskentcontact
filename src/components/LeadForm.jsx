import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './LeadForm.css';

const LeadForm = () => {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setIsSubmitted(true);
      const template = t('form.whatsapp_template', { name: formData.name, phone: formData.phone });
      const whatsappMsg = `*YENİ FORM TALEBİ*\n\n*Ad Soyad:* ${formData.name}\n*Telefon:* ${formData.phone}\n\n${template}`;
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
              <h3>{t('form.success_title')}</h3>
              <p>{t('form.success_desc')}</p>
            </div>
          ) : (
            <div className="form-state">
              <div className="form-header text-center">
                <h2>{t('form.title')}</h2>
                <p>{t('form.subtitle')}</p>
              </div>
              
              <form onSubmit={handleSubmit} className="lead-form">
                <div className="input-group">
                  <input 
                    type="text" 
                    placeholder={t('form.placeholder_name')} 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="input-group">
                  <input 
                    type="tel" 
                    placeholder={t('form.placeholder_phone')} 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-full">
                  <Send size={18} />
                  {t('form.btn_submit')}
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
