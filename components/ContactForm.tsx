import React, { useState } from 'react';
import { Send, Phone, Mail, ArrowRight } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    niche: '',
    email: '',
    phone: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Obrigado! Entraremos em contato em breve.');
    setFormData({ name: '', niche: '', email: '', phone: '', message: '' });
  };

  return (
    // Section Padding
    // CHANGED: Reduced mobile padding from py-10 to py-6
    // ADDED: scroll-mt-28 for anchor link positioning
    <section id="contato" className="scroll-mt-28 py-6 md:py-20 px-4 md:px-12 bg-white relative border-t border-slate-200 overflow-hidden">
        {/* Cinematic glow background - Subtle */}
       <div className="absolute top-0 right-0 w-[60%] h-[100%] bg-rose-50/[0.5] blur-[100px] rounded-full -z-10" />
       <div className="absolute bottom-0 left-0 w-[40%] h-[80%] bg-slate-50/[0.8] blur-[100px] rounded-full -z-10" />

      <div className="mx-auto max-w-[1600px]">
        {/* Grid Layout 12 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
          
          {/* Left Side: Info - 4 Columns */}
          <div className="lg:col-span-4 flex flex-col justify-center relative z-10">
            <span className="text-rose-600 font-bold tracking-[0.4em] text-sm uppercase mb-6 block font-montserrat">VAMOS CONVERSAR?</span>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-slate-900 leading-[1.05] font-serif">
              Comece seu projeto <br />
              <span className="text-slate-400 italic font-medium">agora mesmo.</span>
            </h2>
            
            <p className="text-slate-600 text-lg md:text-xl mb-10 font-light font-montserrat leading-relaxed">
              Preencha o formulário para receber uma consultoria gratuita sobre o potencial digital do seu negócio.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-rose-600 group-hover:scale-110 group-hover:bg-rose-50 transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-0.5 font-montserrat">WhatsApp</p>
                  <p className="font-bold text-lg text-slate-900 font-montserrat">0800 878 2392</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-rose-600 group-hover:scale-110 group-hover:bg-rose-50 transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-0.5 font-montserrat">Email</p>
                  <p className="font-bold text-lg text-slate-900 font-montserrat">contato@elevva.com.br</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form - 7 Columns, Offset 1 */}
          {/* VISUAL OVERHAUL: Removed heavy border, added soft shadow, white background */}
          <div className="lg:col-span-7 lg:col-start-6 w-full relative">
            
            {/* Decorative abstract elements behind form */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-rose-400/20 to-transparent rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-slate-200/40 rounded-full blur-2xl -z-10"></div>

            {/* CHANGED: added 'border-black' for mobile and 'md:border-slate-100' for desktop */}
            <div className="bg-white p-6 md:p-10 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(15,23,42,0.1)] border border-black md:border-slate-100 relative overflow-hidden">
                
                {/* Top Gradient Line Accent */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-rose-500 via-rose-400 to-slate-200"></div>

                <div className="mb-8">
                     <h3 className="text-2xl md:text-3xl font-bold font-serif text-slate-900 mb-2">
                       Solicitar Contato
                     </h3>
                     <p className="text-slate-500 text-xs font-medium font-montserrat flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                       Resposta rápida
                     </p>
                 </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="relative group">
                      <label 
                        htmlFor="name" 
                        className={`absolute left-4 transition-all duration-300 pointer-events-none font-montserrat font-medium ${
                            focusedField === 'name' || formData.name ? '-top-2.5 text-[10px] bg-white px-2 text-rose-600' : 'top-3.5 text-xs text-slate-400'
                        }`}
                      >
                        SEU NOME
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full bg-slate-50 hover:bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 text-sm font-medium focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20 transition-all duration-300"
                      />
                    </div>

                    <div className="relative group">
                      <label 
                        htmlFor="niche" 
                        className={`absolute left-4 transition-all duration-300 pointer-events-none font-montserrat font-medium ${
                            focusedField === 'niche' || formData.niche ? '-top-2.5 text-[10px] bg-white px-2 text-rose-600' : 'top-3.5 text-xs text-slate-400'
                        }`}
                      >
                        SEU NICHO (Ex: Arquitetura)
                      </label>
                      <input
                        type="text"
                        id="niche"
                        name="niche"
                        value={formData.niche}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('niche')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full bg-slate-50 hover:bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 text-sm font-medium focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="relative group">
                      <label 
                        htmlFor="email" 
                        className={`absolute left-4 transition-all duration-300 pointer-events-none font-montserrat font-medium ${
                            focusedField === 'email' || formData.email ? '-top-2.5 text-[10px] bg-white px-2 text-rose-600' : 'top-3.5 text-xs text-slate-400'
                        }`}
                      >
                        EMAIL
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full bg-slate-50 hover:bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 text-sm font-medium focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20 transition-all duration-300"
                      />
                    </div>

                    <div className="relative group">
                      <label 
                        htmlFor="phone" 
                        className={`absolute left-4 transition-all duration-300 pointer-events-none font-montserrat font-medium ${
                            focusedField === 'phone' || formData.phone ? '-top-2.5 text-[10px] bg-white px-2 text-rose-600' : 'top-3.5 text-xs text-slate-400'
                        }`}
                      >
                        WHATSAPP
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-slate-50 hover:bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 text-sm font-medium focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="relative group">
                      <label 
                        htmlFor="message" 
                        className={`absolute left-4 transition-all duration-300 pointer-events-none font-montserrat font-medium ${
                            focusedField === 'message' || formData.message ? '-top-2.5 text-[10px] bg-white px-2 text-rose-600' : 'top-3.5 text-xs text-slate-400'
                        }`}
                      >
                        COMO PODEMOS AJUDAR?
                      </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={3}
                      className="w-full bg-slate-50 hover:bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 text-sm font-medium focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20 transition-all duration-300 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-rose-600 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-slate-900/10 hover:shadow-rose-600/20 font-montserrat uppercase tracking-[0.2em] text-xs transform hover:-translate-y-0.5"
                  >
                    Enviar Solicitação
                    <ArrowRight size={16} />
                  </button>
                </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;