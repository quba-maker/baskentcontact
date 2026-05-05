import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  // Numara müşteri tarafından iletildi.
  const whatsappNumber = "905527641397";
  const message = encodeURIComponent("Merhaba, Başkent Hastanesi Konya ekibine broşür üzerinden ulaşıyorum. Bilgi almak istiyorum.");
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
