import React from 'react';
import { Clock, Layers, ShieldCheck, ArrowRight } from 'lucide-react';

const Audience: React.FC = () => {
  return (
    // CHANGED: bg-[#F5F5F7] to bg-slate-200 md:bg-[#F5F5F7] for darker gray on mobile
    // ADDED: scroll-mt-28 to fix navigation offset
    <section id="audience" className="scroll-mt-28 pt-6 md:pt-14 pb-4 md:pb-16 bg-slate-200 md:bg-[#F5F5F7] border-t border-slate-200 overflow-hidden relative">
      {/* Decorative subtle background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="mx-auto max-w-[1920px] px-5 md:px-12 lg:px-12 relative z-10">
        
        {/* Main Grid Content */}
        {/* Reduced gap to gap-4 on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-24 items-start">
          
          {/* Left Column: Text Content */}
          {/* CHANGED: Removed sticky on mobile (lg:sticky) to fix overlap issue. Adjusted pb. */}
          <div className="flex flex-col lg:sticky lg:top-32 pb-0 md:pb-12">
            
            {/* "QUEM SOMOS" Label - Reduced mb */}
            {/* CHANGED: Increased mb-1 to mb-4 to add space between "Quem somos" and "Design de elite" */}
            <div className="flex items-center gap-4 mb-4 md:mb-8">
              <div className="h-[2px] w-12 md:w-16 bg-rose-600"></div>
              <span className="text-rose-600 font-bold tracking-[0.4em] text-xs md:text-base uppercase font-montserrat">QUEM SOMOS</span>
            </div>
            
            {/* Title - Increased mb for better separation */}
            {/* CHANGED: mb-2 md:mb-8 to mb-8 md:mb-12 */}
            <h2 className="mb-8 md:mb-12 relative">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-serif font-medium text-slate-900 tracking-tighter leading-[0.9]">
                Design de Elite.
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-serif italic font-normal text-rose-600 tracking-tighter leading-[0.9] mt-1 md:mt-2">
                Velocidade Real.
              </span>
            </h2>
            
            {/* Text Content - Reduced spacing */}
            <div className="space-y-3 md:space-y-8 max-w-3xl">
              {/* CHANGED: leading-relaxed to leading-loose for more spacing between lines */}
              <p className="text-slate-600 text-base md:text-xl lg:text-2xl leading-loose font-light font-montserrat text-justify lg:text-left">
                A <span className="relative inline-block">
                  <span className="font-semibold text-slate-900 uppercase tracking-wide relative z-10">ELEVVA</span>
                  <svg className="absolute w-[110%] -left-[5%] -bottom-2 h-4 pointer-events-none z-0" viewBox="0 0 168 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 9.5C28.5 4.5 110.5 1.5 165.5 6.5" stroke="#e11d48" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span> nasceu para profissionais que exigem excelência. Somos uma empresa especializada em criar <span className="text-rose-600 font-medium border-b-2 border-rose-200">autoridade digital instantânea</span> para o mercado de alto padrão.
              </p>
              
              <div className="pl-6 md:pl-8 border-l-4 border-slate-300 py-1 md:py-4">
                <p className="text-slate-800 text-base md:text-xl lg:text-2xl font-medium font-serif italic leading-relaxed">
                  "Transformamos a expertise de Arquitetos, Médicos e Construtoras em vitrines digitais que comunicam valor, exclusividade e confiança."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: High Impact Minimalist List */}
          {/* Adjusted mt to fit snugly below text on mobile. INCREASED from mt-4 to mt-12 for separation. */}
          <div className="flex flex-col mt-12 lg:mt-20 relative">
            
            {/* Added gap-8 on mobile to separate the items */}
            <div className="flex flex-col gap-8 md:gap-0">
                {/* Item 01 */}
                {/* MOBILE STYLE UPDATE: Dark background by default (bg-slate-900), subtle border (border-slate-800). DESKTOP: Transparent with hover. */}
                <div className="group relative border-t border-b md:border-b-0 border-slate-800 md:border-slate-300 bg-slate-900 md:bg-transparent transition-all duration-500 md:hover:bg-slate-900 hover:border-transparent hover:shadow-2xl hover:scale-[1.02] cursor-default">
                    <div className="p-5 md:p-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-12 relative z-10">
                        {/* Number: Rose by default on mobile, Slate on desktop */}
                        <span className="text-5xl md:text-7xl font-serif text-rose-600 md:text-slate-300/50 md:group-hover:text-rose-600 transition-colors duration-500 leading-none">01</span>
                        <div className="flex-1">
                            {/* Title: White by default on mobile, Slate on desktop */}
                            <h4 className="text-xl md:text-3xl font-bold text-white md:text-slate-900 md:group-hover:text-white uppercase tracking-wider mb-2 transition-colors duration-500 font-montserrat flex items-center gap-3">
                                Velocidade
                                <Clock size={24} className="text-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block" />
                            </h4>
                            {/* Description: Light slate by default on mobile, Dark slate on desktop */}
                            <p className="text-slate-400 md:text-slate-500 md:group-hover:text-slate-400 text-sm md:text-lg leading-relaxed transition-colors duration-500 font-montserrat font-light">
                                Seu site pronto em apenas <span className="relative inline-block"><span className="font-serif italic text-lg md:text-2xl text-white md:text-slate-900 md:group-hover:text-white transition-colors relative z-10">48 horas</span><svg className="absolute w-[110%] -left-[5%] -bottom-1 h-3 pointer-events-none z-0" viewBox="0 0 168 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 9.5C28.5 4.5 110.5 1.5 165.5 6.5" stroke="#e11d48" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg></span>.
                            </p>
                        </div>
                        <ArrowRight className="hidden md:block text-slate-300 group-hover:text-rose-600 group-hover:translate-x-2 transition-all duration-500" size={32} />
                    </div>
                </div>

                {/* Item 02 */}
                {/* Applied same mobile dark theme logic */}
                <div className="group relative border-t border-b md:border-b-0 border-slate-800 md:border-slate-300 bg-slate-900 md:bg-transparent transition-all duration-500 md:hover:bg-slate-900 hover:border-transparent hover:shadow-2xl hover:scale-[1.02] cursor-default">
                    <div className="p-5 md:p-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-12 relative z-10">
                        <span className="text-5xl md:text-7xl font-serif text-rose-600 md:text-slate-300/50 md:group-hover:text-rose-600 transition-colors duration-500 leading-none">02</span>
                        <div className="flex-1">
                            <h4 className="text-xl md:text-3xl font-bold text-white md:text-slate-900 md:group-hover:text-white uppercase tracking-wider mb-2 transition-colors duration-500 font-montserrat flex items-center gap-3">
                                Estética
                                <Layers size={24} className="text-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block" />
                            </h4>
                            <p className="text-slate-400 md:text-slate-500 md:group-hover:text-slate-400 text-sm md:text-lg leading-relaxed transition-colors duration-500 font-montserrat font-light">
                                Design minimalista focado em <strong className="text-white md:text-slate-900 md:group-hover:text-white transition-colors">alto valor percebido</strong>.
                            </p>
                        </div>
                        <ArrowRight className="hidden md:block text-slate-300 group-hover:text-rose-600 group-hover:translate-x-2 transition-all duration-500" size={32} />
                    </div>
                </div>

                {/* Item 03 */}
                {/* Applied same mobile dark theme logic */}
                <div className="group relative border-t border-b border-slate-800 md:border-slate-300 bg-slate-900 md:bg-transparent transition-all duration-500 md:hover:bg-slate-900 hover:border-transparent hover:shadow-2xl hover:scale-[1.02] cursor-default">
                    <div className="p-5 md:p-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-12 relative z-10">
                        <span className="text-5xl md:text-7xl font-serif text-rose-600 md:text-slate-300/50 md:group-hover:text-rose-600 transition-colors duration-500 leading-none">03</span>
                        <div className="flex-1">
                            <h4 className="text-xl md:text-3xl font-bold text-white md:text-slate-900 md:group-hover:text-white uppercase tracking-wider mb-2 transition-colors duration-500 font-montserrat flex items-center gap-3">
                                Risco Zero
                                <ShieldCheck size={24} className="text-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block" />
                            </h4>
                            <p className="text-slate-400 md:text-slate-500 md:group-hover:text-slate-400 text-sm md:text-lg leading-relaxed transition-colors duration-500 font-montserrat font-light">
                                Você só paga depois de pronto.
                            </p>
                        </div>
                        <ArrowRight className="hidden md:block text-slate-300 group-hover:text-rose-600 group-hover:translate-x-2 transition-all duration-500" size={32} />
                    </div>
                </div>
            </div>

            {/* CTA Button Removed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;