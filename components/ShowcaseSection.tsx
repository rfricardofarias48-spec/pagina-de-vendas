import React from 'react';

const solutions = [
  {
    category: "Visual",
    number: "01",
    title: "Site em Alto Padrão",
    image: "https://ik.imagekit.io/xsbrdnr0y/tela.png",
  },
  {
    category: "Credibilidade",
    number: "02",
    title: "E-mail Profissional",
    image: "https://ik.imagekit.io/xsbrdnr0y/googe.png",
  },
  {
    category: "Visibilidade",
    number: "03",
    title: "Posicionamento Google",
    image: "https://ik.imagekit.io/xsbrdnr0y/Gemini_Generated_Image_nz5gaanz5gaanz5g.png",
  }
];

interface ShowcaseSectionProps {
  id?: string;
}

const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ id }) => {
  return (
    // CHANGED: Reduced padding from pt-10/pb-8 to pt-6/pb-6 for tighter mobile spacing
    // ADDED: scroll-mt-28 for anchor link positioning
    <section id={id} className="scroll-mt-28 pt-6 pb-6 md:pt-16 md:pb-12 bg-white relative overflow-hidden border-b border-slate-100">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-50 via-white to-white pointer-events-none"></div>

      <div className="mx-auto max-w-[1600px] px-6 md:px-12 relative z-10">
        
        {/* 1. HEADER CENTERED - Reduced margin-bottom */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
            {/* Wrapped in div and made span inline-block relative to position SVG correctly */}
            <div className="mb-4">
              <span className="text-rose-600 font-bold tracking-[0.3em] text-xs md:text-sm uppercase font-montserrat">
                  O Padrão
                  {" "}
                  <span className="relative inline-block">
                    Elevva
                    {/* SVG Scratch Effect - Only under Elevva, Black color (#0f172a) */}
                    <svg className="absolute w-[120%] -left-[10%] -bottom-2 h-3 pointer-events-none z-0 opacity-90" viewBox="0 0 168 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 9.5C28.5 4.5 110.5 1.5 165.5 6.5" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-slate-900 tracking-tight leading-[1.1]">
                Soluções completas para <br className="hidden md:block" />
                um <span className="italic text-slate-400">posicionamento de elite.</span>
            </h2>
        </div>

        {/* 2. GRID - Restored Device Mockups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
            {solutions.map((item, index) => (
                <div 
                    key={index} 
                    className="group flex flex-col items-center text-center cursor-default"
                >
                    {/* TEXT CONTENT MOVED UP (Above Image) */}
                    {/* CHANGED: Reduced margin from mb-8 to mb-4 */}
                    <div className="space-y-2 mb-4">
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-300 font-montserrat block mb-1">
                            {item.number}
                        </span>
                        
                        <h3 className="text-xl md:text-2xl font-bold font-montserrat text-slate-900">
                            {item.title}
                        </h3>
                    </div>

                    {/* DEVICE CONTAINER (Moved Below Text) */}
                    {/* Removed mb-6 since it is now at the bottom */}
                    {/* VISUAL TWEAK: Added hover scale effect to the container itself */}
                    <div className="relative w-full max-w-[340px] mx-auto aspect-[3/4] bg-slate-900 rounded-[2rem] shadow-2xl shadow-slate-200 border-[8px] border-slate-900 ring-1 ring-slate-900/5 transition-all duration-700 hover:-translate-y-2 hover:shadow-rose-900/10 z-10">
                            
                        {/* Physical Buttons */}
                        <div className="absolute -top-[3px] right-8 w-8 h-[3px] bg-slate-700 rounded-t-md opacity-90"></div>
                        <div className="absolute top-16 -right-[3px] w-[3px] h-12 bg-slate-700 rounded-r-md opacity-90"></div>

                        {/* THE SCREEN */}
                        {/* CHANGED: Added padding (p-[3px]) for index 0 to create an inner bezel and prevent crop */}
                        <div className={`relative w-full h-full overflow-hidden rounded-[1.4rem] bg-black border-[4px] border-slate-900 ${index === 0 ? 'p-[3px]' : ''}`}>
                            {/* Camera */}
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#333] rounded-full z-30 opacity-80"></div>
                            
                            {/* Image */}
                            {/* CHANGED: Logic for object-position. Index 0 now uses object-top (centered) instead of object-left-top for better framing. */}
                            <img 
                            src={item.image} 
                            alt={item.title} 
                            className={`w-full h-full transition-transform duration-1000 ease-out opacity-90 group-hover:opacity-100 object-cover group-hover:scale-105 
                                ${index === 0 ? 'object-top rounded-[1.1rem]' : 'object-top'}`}
                            />
                            
                            {/* Reflection */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-20 pointer-events-none z-10"></div>
                        </div>
                    </div>

                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default ShowcaseSection;