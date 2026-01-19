import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ShowcaseSection from './components/ShowcaseSection';
import Audience from './components/Audience';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieConsent from './components/CookieConsent';
import LegalModal from './components/LegalModals';

const App: React.FC = () => {
  // State for Legal Modals
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacy = () => setActiveModal('privacy');
  const openTerms = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);

  return (
    // CHANGED: bg-white to bg-slate-900 to match index.html and prevent white flash on load
    <div className="min-h-screen text-slate-900 bg-slate-900 overflow-x-hidden selection:bg-rose-500 selection:text-white">
      
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Quem Somos - Fundo Cinza */}
        <Audience />

        {/* Nossos Serviços (Carrossel de Nichos) - Fundo Branco */}
        <ShowcaseSection id="ux-design" />

        {/* Preço - Fundo Cinza */}
        <Pricing />
        
        {/* Contato - Fundo Branco */}
        <ContactForm />
      </main>

      <Footer onOpenPrivacy={openPrivacy} onOpenTerms={openTerms} />
      
      <WhatsAppButton />
      
      <CookieConsent onOpenPrivacy={openPrivacy} />

      {/* Modals */}
      <LegalModal 
        isOpen={activeModal === 'privacy'} 
        onClose={closeModal} 
        title="Política de Privacidade" 
        type="privacy" 
      />
      <LegalModal 
        isOpen={activeModal === 'terms'} 
        onClose={closeModal} 
        title="Termos de Uso" 
        type="terms" 
      />
    </div>
  );
};

export default App;