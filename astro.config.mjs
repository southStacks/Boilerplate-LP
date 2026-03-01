import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown'; // O Astro já deve ter adicionado isto

export default defineConfig({
  site: 'https://suaagencia.com.br', 
  
  integrations: [
    react(), 
    sitemap(),
    partytown({
      // Isso permite que scripts no Partytown enviem dados para a página principal
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});