import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

interface CookieConsentProps {
  onOpenPrivacy: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onOpenPrivacy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('elevva_cookie_consent');
    if (!consent) {
      // Small delay for smooth entrance
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('elevva_cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    // WRAPPER: Floating Position.
    // CHANGED: Removed max-w-4xl and centering transforms.
    // ADDED: left-4 right-4 md:left-10 md:right-10 to stretch it horizontally near the edges.
    <div className="fixed bottom-4 md:bottom-8 left-4 right-4 md:left-10 md:right-10 z-[60] animate-[slideUp_0.8s_ease-out]">
      
      {/* GLASS CONTAINER: Semi-transparent background, Blur, Rounded Borders */}
      <div className="bg-slate-900/85 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl md:rounded-full p-4 md:py-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* TEXT CONTENT */}
        <div className="flex items-center gap-3 md:gap-6 text-center md:text-left">
           {/* Subtle Icon */}
           <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/5 shrink-0">
              <Cookie size={18} className="text-rose-500" />
           </div>

           <p className="text-slate-300 text-[11px] md:text-sm font-light leading-relaxed font-montserrat">
              Utilizamos cookies para personalizar sua experiência e analisar nosso tráfego. Ao continuar navegando, você concorda com nossa{" "}
              <button 
                onClick={onOpenPrivacy}
                className="text-white hover:text-rose-500 font-medium underline decoration-slate-600 underline-offset-2 transition-colors"
              >
                Política de Privacidade
              </button>.
           </p>
        </div>

        {/* ACTION BUTTON */}
        <button 
          onClick={handleAccept}
          className="w-full md:w-auto px-8 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-xl md:rounded-full font-bold font-montserrat text-[10px] md:text-xs uppercase tracking-[0.15em] transition-all shadow-lg shadow-rose-900/20 whitespace-nowrap hover:scale-105 active:scale-95 shrink-0"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;