import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const { t } = useTranslation();
  const whatsappNumber = "905527641397";
  const message = encodeURIComponent(t('whatsapp_float_msg'));
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-float pulse-animation"
      aria-label="WhatsApp ile İletişime Geçin"
    >
      <MessageCircle size={32} color="white" />
    </a>
  );
};

export default WhatsAppButton;
