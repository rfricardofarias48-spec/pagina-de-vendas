import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'privacy' | 'terms';
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, type }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-3xl max-h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-[fadeIn_0.3s_ease-out]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50">
          <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900">{title}</h3>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200 transition-colors text-slate-500 hover:text-slate-900"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Text Area */}
        <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar text-slate-600 font-montserrat leading-relaxed text-sm md:text-base space-y-6">
          
          {type === 'privacy' && (
            <>
              <p><strong>Última atualização: Outubro de 2023</strong></p>
              <p>A <strong>ELEVVA</strong> ("nós", "nosso") valoriza sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você visita nosso site.</p>
              
              <h4 className="text-lg font-bold text-slate-900 mt-6">1. Coleta de Informações</h4>
              <p>Podemos coletar informações pessoais que você nos fornece voluntariamente ao preencher formulários no site, como nome, endereço de e-mail e número de telefone. Também coletamos automaticamente dados de navegação através de cookies para melhorar a experiência do usuário.</p>
              
              <h4 className="text-lg font-bold text-slate-900 mt-6">2. Uso das Informações</h4>
              <p>Utilizamos as informações coletadas para:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Fornecer e operar nossos serviços;</li>
                <li>Melhorar, personalizar e expandir nosso site;</li>
                <li>Entender e analisar como você utiliza nosso site;</li>
                <li>Entrar em contato com você diretamente para fins de atendimento ao cliente ou marketing.</li>
              </ul>

              <h4 className="text-lg font-bold text-slate-900 mt-6">3. Cookies</h4>
              <p>Utilizamos cookies para armazenar informações sobre as preferências dos visitantes e para registrar informações específicas do usuário sobre quais páginas o visitante acessa ou visita. Você pode optar por desativar os cookies através das opções do seu navegador.</p>

              <h4 className="text-lg font-bold text-slate-900 mt-6">4. Proteção de Dados</h4>
              <p>Adotamos medidas de segurança adequadas para proteger contra acesso não autorizado, alteração, divulgação ou destruição de suas informações pessoais.</p>

              <h4 className="text-lg font-bold text-slate-900 mt-6">5. Contato</h4>
              <p>Se tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco através do e-mail: contato@elevva.com.br</p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p><strong>Última atualização: Outubro de 2023</strong></p>
              <p>Bem-vindo ao site da <strong>ELEVVA</strong>. Ao acessar e usar este site, você concorda em cumprir e estar vinculado aos seguintes Termos de Uso.</p>
              
              <h4 className="text-lg font-bold text-slate-900 mt-6">1. Aceitação dos Termos</h4>
              <p>Ao acessar este site, você concorda em estar vinculado a estes Termos de Uso, a todas as leis e regulamentos aplicáveis, e concorda que é responsável pelo cumprimento de quaisquer leis locais aplicáveis.</p>
              
              <h4 className="text-lg font-bold text-slate-900 mt-6">2. Licença de Uso</h4>
              <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site da ELEVVA, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título.</p>

              <h4 className="text-lg font-bold text-slate-900 mt-6">3. Isenção de Responsabilidade</h4>
              <p>Os materiais no site da ELEVVA são fornecidos "como estão". A ELEVVA não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual.</p>

              <h4 className="text-lg font-bold text-slate-900 mt-6">4. Limitações</h4>
              <p>Em nenhum caso a ELEVVA ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais no site da ELEVVA.</p>
              
              <h4 className="text-lg font-bold text-slate-900 mt-6">5. Lei Aplicável</h4>
              <p>Estes termos e condições são regidos e interpretados de acordo com as leis do Brasil e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.</p>
            </>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold font-montserrat text-xs uppercase tracking-widest hover:bg-rose-600 transition-colors"
          >
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;