import React from 'react';
import { Send } from 'lucide-react';
import { useForm } from '../hooks/useForm';

export default function ContactForm() {
  // Coloque aqui o número do cliente (DDI + DDD + Número, sem espaços ou símbolos)
  const WHATSAPP_NUMBER = "5511999999999"; 
  
  const { formData, handleChange, handleSubmit, isSubmitting } = useForm(WHATSAPP_NUMBER);

  return (
    <section id="contact" class="py-24 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Vamos Escalar o seu Negócio?
          </h2>
          <p class="text-lg text-neutral-600 dark:text-neutral-400">
            Preencha os dados abaixo e fale diretamente com a nossa equipe no WhatsApp.
          </p>
        </div>

        <div class="bg-neutral-50 dark:bg-neutral-800/50 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700/50 shadow-lg">
          <form onSubmit={handleSubmit} class="space-y-6">
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Nome Completo *</label>
                <input 
                  type="text" id="name" name="name" required
                  value={formData.name} onChange={handleChange}
                  class="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors outline-none"
                  placeholder="Ex: João Silva"
                />
              </div>

              <div>
                <label htmlFor="phone" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">WhatsApp *</label>
                <input 
                  type="tel" id="phone" name="phone" required
                  value={formData.phone} onChange={handleChange}
                  class="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors outline-none"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">E-mail Profissional</label>
              <input 
                type="email" id="email" name="email"
                value={formData.email} onChange={handleChange}
                class="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors outline-none"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Como podemos ajudar?</label>
              <textarea 
                id="message" name="message" rows="4"
                value={formData.message} onChange={handleChange}
                class="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors outline-none resize-none"
                placeholder="Conte-nos um pouco sobre o seu projeto..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              class="w-full inline-flex justify-center items-center px-8 py-4 bg-secondary hover:bg-emerald-600 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-secondary/30 disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              {isSubmitting ? 'Redirecionando...' : 'Iniciar Conversa no WhatsApp'}
              {!isSubmitting && <Send class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}