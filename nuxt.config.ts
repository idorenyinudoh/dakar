import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  build: {
    transpile: [
      'gsap'
    ]
  },
  app: {
    head: {
      title: 'Dakar Renaissance 2025 | Africa’s Cultural Capital',
      meta: [
        { name: 'description', content: 'Join Dakar Renaissance 2025, a global celebration of Senegal’s culture, innovation, and heritage. Experience music, film, fashion, sustainability, and more in Africa’s cultural capital.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'Dakar Renaissance 2025 | Africa’s Cultural Capital' },
        { property: 'og:description', content: 'Join Dakar Renaissance 2025, a global celebration of Senegal’s culture, innovation, and heritage.' },
        { property: 'og:image', content: 'https://dakar-e7n.pages.dev/dakar-poster.png' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://dakar-e7n.pages.dev/' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Dakar Renaissance 2025 | Africa’s Cultural Capital' },
        { name: 'twitter:description', content: 'Join Dakar Renaissance 2025, a global celebration of Senegal’s culture, innovation, and heritage.' },
        { name: 'twitter:image', content: 'https://dakar-e7n.pages.dev/dakar-poster.png' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Manrope:wght@200..800&display=swap' }
      ]
    }
  }
})
