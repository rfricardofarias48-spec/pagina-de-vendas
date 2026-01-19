import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    // Main Container: Changed h-[100dvh] to h-[100svh] to prevent resizing on mobile scroll (address bar toggle)
    <section id="hero" className="relative h-[100svh] w-full overflow-hidden bg-slate-900">
      
      {/* Background Image with Slow Zoom Animation */}
      <div className="absolute inset-0 z-0 bg-slate-900">
        <div className="relative w-full h-full animate-slow-zoom">
            <img 
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop" 
              alt="Luxury Interior Design" 
              // ADDED: fetchPriority and decoding to force immediate load
              fetchPriority="high"
              decoding="sync"
              className="w-full h-full object-cover brightness-[0.50]"
            />
        </div>
        {/* Gradient Overlay - Darker at bottom for button readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 lg:bg-gradient-to-r lg:from-black/95 lg:via-black/70 lg:to-black/30" />
      </div>

      {/* Content Container */}
      {/* Mobile: Flex Column for vertical stacking. Desktop: Grid for side-by-side. */}
      {/* CHANGED: pt-24 to pt-32 to push text lower on mobile */}
      <div className="relative z-10 w-full h-full flex flex-col lg:grid lg:grid-cols-12 gap-0 lg:gap-12 px-5 md:px-16 pt-32 lg:pt-10">
            
            {/* ---------------- TEXT CONTENT ---------------- */}
            <div className="flex-none lg:col-span-7 flex flex-col items-start justify-start lg:justify-center relative z-20">
                
                {/* Main Headline */}
                {/* Reduced margin-top for mobile to push it higher up */}
                <div className="relative mb-4 md:mb-10 w-full">
                    <h1 className="text-white text-left leading-none select-none">
                        {/* Layer 1: Seu Site em */}
                        {/* CHANGED: text-[10vw] to text-[13vw] for larger mobile text */}
                        {/* CHANGED: Reduced animation delay from 0.2s to 0s for immediate appearance */}
                        <span className="block text-[13vw] lg:text-[9.5rem] xl:text-[11rem] font-serif font-light tracking-tighter relative z-10 opacity-0 animate-[slideUp_1s_ease-out_0s_forwards]">
                        Seu Site em
                        </span>
                        
                        {/* Layer 2: Alto Padrão */}
                        {/* CHANGED: text-[10vw] to text-[13vw] for larger mobile text */}
                        {/* CHANGED: Reduced animation delay from 0.4s to 0.1s */}
                        {/* CHANGED: Increased negative margin from -mt-1 to -mt-3 on mobile to bring text closer */}
                        <span className="block text-[13vw] lg:text-[9.5rem] xl:text-[11rem] font-serif italic font-medium tracking-tighter text-rose-600 -mt-3 md:-mt-4 lg:-mt-14 relative z-0 opacity-0 animate-[slideUp_1s_ease-out_0.1s_forwards]">
                        Alto Padrão
                        </span>
                    </h1>
                </div>

                {/* Description Text */}
                {/* Made text slightly smaller on mobile to save vertical space */}
                {/* CHANGED: Reduced animation delay from 0.8s to 0.3s */}
                <div className="mb-4 lg:mb-14 pl-1 md:pl-4 max-w-3xl opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
                    {/* CHANGED: text-base to text-xl on mobile for larger readability */}
                    <p className="text-slate-100 font-montserrat text-xl md:text-2xl lg:text-[2rem] font-light leading-[1.4] md:leading-[1.2] tracking-[0.05em] drop-shadow-sm text-left">
                        "Transforme sua presença online em uma máquina de fechar contratos. Em 
                        <span className="relative inline-block mx-2 align-baseline">
                          <span className="font-bold text-rose-600 relative z-10">48 horas</span>
                          {/* Hand-drawn underline SVG */}
                          <svg className="absolute w-[120%] -left-[10%] -bottom-1.5 h-3 md:h-4 pointer-events-none z-0" viewBox="0 0 168 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 9.5C28.5 4.5 110.5 1.5 165.5 6.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        você terá um site de alto nível."
                    </p>
                </div>
            </div>

            {/* ---------------- VIDEO MOCKUP ---------------- */}
            {/* Mobile: Visible and Flex-grow to fill space. Desktop: Col-span-5. */}
            {/* CHANGED: pb-20 to pb-32 to lift video higher up away from bottom button on mobile */}
            {/* CHANGED: Drastically reduced animation delay from 0.8s to 0.2s so it appears almost immediately */}
            <div className="flex-1 lg:h-full w-full flex items-center justify-center lg:col-span-5 relative perspective-[2000px] opacity-0 animate-[fadeInRight_1s_ease-out_0.2s_forwards] z-10 pb-32 lg:pb-0">
                {/* Floating Animation Wrapper */}
                {/* CHANGED: max-w-[350px] to max-w-full on mobile to use full width available */}
                <div className="animate-float-slow transform lg:rotate-y-[-12deg] lg:rotate-x-[5deg] transition-transform duration-700 ease-out w-full max-w-full md:max-w-[340px] lg:max-w-none lg:w-[115%] lg:-ml-[15%]">
                    
                    {/* TABLET BODY */}
                    {/* CHANGED: aspect-[4/3] to aspect-video on mobile to prevent cropping of 16:9 video content */}
                    <div className="relative mx-auto w-full aspect-video lg:aspect-video bg-gray-900 rounded-[1.5rem] lg:rounded-[2.5rem] p-2 lg:p-3 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.8)] border border-gray-700 ring-1 ring-white/10">
                        
                        {/* Physical Buttons (Decorative) */}
                        <div className="absolute -right-[2px] top-12 w-[2px] h-8 bg-gray-600 rounded-r-md shadow-md"></div>

                        {/* BEZEL */}
                        <div className="relative w-full h-full bg-black rounded-[1rem] lg:rounded-[2rem] overflow-hidden border border-gray-800 shadow-inner">
                            
                            {/* CAMERA */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-6 lg:h-8 z-30 flex justify-center items-center pointer-events-none">
                                <div className="w-2 h-2 lg:w-3.5 lg:h-3.5 bg-[#0a0a0a] rounded-full border border-[#222] flex items-center justify-center relative shadow-[0_0_5px_rgba(0,0,0,0.8)] mt-1">
                                    <div className="w-1 lg:w-1.5 h-1 lg:h-1.5 bg-[#1a237e] rounded-full opacity-60"></div>
                                </div>
                            </div>

                            {/* Screen Content */}
                            <div className="w-full h-full bg-black relative">
                                <video 
                                    src="https://ik.imagekit.io/xsbrdnr0y/Video%20Project%203.mp4?updatedAt=1768586004443" 
                                    // ADDED: Poster image to show immediately while video loads
                                    poster="https://ik.imagekit.io/xsbrdnr0y/tela.png"
                                    className="w-full h-full object-cover lg:object-fill scale-[1.01]" 
                                    autoPlay
                                    muted 
                                    loop 
                                    playsInline
                                    preload="auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/0 to-transparent pointer-events-none z-10 mix-blend-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ---------------- CTA BUTTON ---------------- */}
            
            {/* MOBILE BUTTON: Absolute Bottom, Smaller */}
            {/* ANIMATION UPDATE: Removed static red border, added 'animate-pulse-glow' */}
            <div className="lg:hidden absolute bottom-12 left-0 w-full flex flex-col items-center justify-center z-40 opacity-0 animate-[fadeIn_1s_ease-out_0.4s_forwards]">
                <a 
                href="#contato"
                className="relative inline-flex items-center justify-center px-6 py-3 bg-white text-slate-950 rounded-full text-xs font-bold tracking-[0.15em] uppercase transition-all duration-500 overflow-hidden group w-[80%] max-w-[280px] animate-pulse-glow"
                >
                    <span className="relative z-10">Quero meu site em 48h</span>
                     {/* Shine Effect */}
                    <div className="absolute inset-0 -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-rose-200/40 to-transparent skew-x-12 z-0" />
                </a>
                
                {/* Small Scroll Indicator below button */}
                 <div className="mt-3 animate-bounce opacity-50">
                     <ArrowDown className="text-white w-4 h-4" />
                 </div>
            </div>

            {/* DESKTOP BUTTON: Standard Position */}
            {/* ANIMATION UPDATE: Removed static red border, added 'animate-pulse-glow' */}
            <div className="hidden lg:block absolute bottom-32 left-24 pl-2 z-30 opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
                 <a 
                    href="#contato"
                    className="relative inline-flex items-center justify-center px-12 py-6 bg-white text-slate-950 rounded-full text-xl font-bold tracking-[0.15em] uppercase transition-all duration-500 hover:scale-105 hover:bg-slate-50 overflow-hidden group animate-pulse-glow"
                >
                    <span className="relative z-10">Quero meu site em 48h</span>
                    {/* Shine Effect */}
                    <div className="absolute inset-0 -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-rose-200/40 to-transparent skew-x-12 z-0" />
                </a>
                {/* Scroll Indicator Desktop */}
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-3 opacity-70">
                    <span className="text-white text-xs uppercase tracking-[0.25em]">Explore</span>
                    <ArrowDown className="text-white" size={24} />
                </div>
            </div>

      </div>

      {/* Styles for animations */}
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(80px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float-slow {
            0%, 100% { transform: translateY(0px) rotateY(-12deg) rotateX(5deg); }
            50% { transform: translateY(-20px) rotateY(-12deg) rotateX(5deg); }
        }
        @keyframes shimmer {
            0% { transform: translateX(-150%); }
            50%, 100% { transform: translateX(150%); }
        }
        /* ADDED: Pulse Glow Animation for Button */
        @keyframes pulse-glow {
            0%, 100% { 
                box-shadow: 0 0 15px rgba(225, 29, 72, 0.3); 
                transform: scale(1);
            }
            50% { 
                box-shadow: 0 0 35px rgba(225, 29, 72, 0.6); 
                transform: scale(1.03);
            }
        }
        .animate-pulse-glow {
            animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;