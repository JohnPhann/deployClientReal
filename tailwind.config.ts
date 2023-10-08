import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'apg': "url('/photo.jpeg')",
        'the-tropicana': "url('/tropi.jpeg')",
        'long-insland': "url('/long.jpeg')",
        'lavida': "url('/lavida.jpeg')",
        'chilinh-center': "url('/chilinh.webp')",
          
      },
    },
  },
  plugins: [],
}
export default config
