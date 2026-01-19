import React from 'react';
import { Check, X, ArrowRight, Sparkles } from 'lucide-react';

const plans = [
  {
    name: "Essencial",
    price: "1.997",
    maintenance: "100",
    features: [
      { name: "Site em Alto Padrão", included: true },
      { name: "Domínio (seunome.com.br)", included: true },
      { name: "Email comercial", included: false },
      { name: "Google Maps", included: false },
    ]
  },
  {
    name: "Profissional",
    price: "2.497",
    maintenance: "150",
    popular: true,
    features: [
      { name: "Site em Alto Padrão", included: true },
      { name: "Domínio (seunome.com.br)", included: true },
      { name: "Email comercial", included: true },
      { name: "Google Maps", included: true },
    ]
  },
  {
    name: "Premium",
    price: "3.097",
    maintenance: "250",
    features: [
      { name: "Site em Alto Padrão", included: true },
      { name: "Domínio (seunome.com.br)", included: true },
      { name: "Email comercial", included: true },
      { name: "Google Maps", included: true },
    ]
  }
];

const Pricing: React.FC = () => {
  return (
    // CHANGED: bg-[#F5F5F7] to bg-slate-200 md:bg-[#F5F5F7] for darker gray on mobile
    // ADDED: scroll-mt-28 for anchor link positioning
    <section id="planos" className="scroll-mt-28 bg-slate-200 md:bg-[#F5F5F7] border-t border-slate-900 relative overflow-hidden">
      
      {/* Decorative subtle background pattern matched from Audience section */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* CHANGED: Reduced padding from py-8 to py-5 on mobile for tighter spacing */}
      <div className="mx-auto max-w-[1400px] px-5 md:px-12 py-5 md:py-14 relative z-10">
        
        {/* Header - Minimalist Title & Subtitle */}
        {/* Reduced margin from mb-12 to mb-8 */}
        <div className="text-center mb-8 md:mb-12 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-slate-900 leading-[1.1] tracking-tight mb-4">
            Planos{" "}
            <span className="relative inline-block">
                <span className="text-rose-600 text-[0.85em]">Elevva</span>
                {/* Underline SVG - Dark to match the reference image */}
                <svg className="absolute w-[120%] -left-[10%] -bottom-2 h-3 md:h-4 pointer-events-none z-0" viewBox="0 0 168 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 9.5C28.5 4.5 110.5 1.5 165.5 6.5" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </span>
          </h2>
          <p className="text-slate-500 font-montserrat text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
            Simples. Direto. Transparente.
          </p>
        </div>

        {/* Cards Grid - Vertical on Mobile (Stack), Grid on Desktop */}
        {/* CHANGED: Switched from flex/carousel to grid-cols-1 for vertical stacking on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 items-stretch pb-0 lg:pb-0 px-0 lg:px-0">
          
          {plans.map((plan, index) => (
            <div 
              key={index}
              // CHANGED: Removed min-w and snap classes. Added w-full.
              // REMOVED: order-first for popular plan to respect the list order (Essencial -> Profissional -> Premium)
              className={`w-full relative rounded-[2rem] p-8 md:p-10 transition-all duration-300 group flex flex-col h-full
                ${plan.popular 
                  ? 'bg-slate-900 text-white border-2 border-slate-900 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] scale-100 lg:scale-105 z-20' 
                  : 'bg-white text-black border-2 border-black hover:shadow-xl z-10'
                }
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-rose-600 text-white px-6 py-2 rounded-full text-xs font-bold font-montserrat uppercase tracking-[0.2em] shadow-lg shadow-rose-900/50 flex items-center gap-2 whitespace-nowrap border border-rose-500">
                  <Sparkles size={12} fill="currentColor" />
                  Popular
                </div>
              )}

              {/* Card Header */}
              <div className={`text-center mb-8 border-b-2 pb-8 ${plan.popular ? 'border-slate-700' : 'border-black'}`}>
                <h3 className={`text-sm font-bold uppercase tracking-[0.3em] font-montserrat mb-6 ${plan.popular ? 'text-rose-400' : 'text-black'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-center justify-center gap-1 mb-2">
                  <span className={`font-serif text-2xl self-start mt-2 ${plan.popular ? 'text-slate-400' : 'text-black'}`}>R$</span>
                  <span className={`text-5xl md:text-6xl font-serif tracking-tight font-medium ${plan.popular ? 'text-white' : 'text-black'}`}>{plan.price}</span>
                </div>
              </div>

              {/* Maintenance Fee - Boxed High Contrast & Dashed - SIDE BY SIDE LAYOUT */}
              <div className={`rounded-xl p-4 mb-10 border-2 border-dashed flex items-center justify-center gap-3 ${
                  plan.popular 
                    ? 'bg-slate-800/80 border-slate-600' 
                    : 'bg-slate-50 border-slate-300'
                }`}>
                <p className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                  Manutenção
                </p>
                <p className={`text-base md:text-lg font-bold font-montserrat ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                  R$ {plan.maintenance}<span className="text-xs font-normal opacity-70">/mês</span>
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-sm md:text-base font-montserrat">
                    {feature.included ? (
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${plan.popular ? 'bg-emerald-500 text-white' : 'bg-emerald-600 text-white'}`}>
                         <Check size={14} strokeWidth={3} />
                      </div>
                    ) : (
                       <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${plan.popular ? 'bg-slate-800 text-slate-600' : 'bg-slate-200 text-slate-400'}`}>
                         <X size={14} strokeWidth={3} />
                       </div>
                    )}
                    <span className={`font-medium ${
                        feature.included 
                            ? (plan.popular ? 'text-white' : 'text-black')
                            : (plan.popular ? 'text-slate-600 line-through decoration-slate-700' : 'text-slate-400 line-through decoration-slate-400')
                    }`}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a 
                href="#contato" 
                className={`w-full py-5 rounded-xl font-montserrat text-xs font-bold uppercase tracking-[0.2em] text-center transition-all duration-300 flex items-center justify-center gap-2 group/btn mt-auto border-2
                  ${plan.popular 
                    ? 'bg-white text-slate-900 border-white hover:bg-rose-600 hover:text-white hover:border-rose-600' 
                    : 'bg-black text-white border-black hover:bg-slate-800 hover:border-slate-800'
                  }
                `}
              >
                Selecionar
                <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
              </a>

            </div>
          ))}

        </div>
        
        {/* Footer Note Removed */}

      </div>
    </section>
  );
};

export default Pricing;