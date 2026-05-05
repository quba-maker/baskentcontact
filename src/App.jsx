import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TeamCards from './components/TeamCards';
import LeadForm from './components/LeadForm';
import Websites from './components/Websites';
import ContactFooter from './components/ContactFooter';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      
      <main>
        <Hero />
        <TeamCards />
        <LeadForm />
        <Websites />
      </main>
      
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
}

export default App;
