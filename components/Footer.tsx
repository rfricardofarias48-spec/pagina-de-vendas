import React from 'react';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  return (
    <footer className="bg-black py-4 md:py-8 border-t border-zinc-900">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 relative flex flex-row items-center justify-between gap-4">
        
        {/* Logo - Left aligned */}
        <div className="flex-shrink-0">
           <a href="#" className="text-lg md:text-2xl font-bold tracking-tighter text-white">
            ELEVVA<span className="text-rose-500">.</span>
          </a>
        </div>

        {/* Legal Links - Right aligned (next to logo on the row), smaller font */}
        <div className="flex items-center gap-3 md:gap-8">
            <button 
              onClick={onOpenTerms}
              className="text-slate-500 hover:text-white text-[9px] md:text-xs font-medium tracking-wide transition-colors font-montserrat uppercase cursor-pointer whitespace-nowrap"
            >
              Termos de Uso
            </button>
            <button 
              onClick={onOpenPrivacy}
              className="text-slate-500 hover:text-white text-[9px] md:text-xs font-medium tracking-wide transition-colors font-montserrat uppercase cursor-pointer whitespace-nowrap"
            >
              Política de Privacidade
            </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;