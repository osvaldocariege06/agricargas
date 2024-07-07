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
        'hero-image': "url('/hero-background.png')",
        'image-subscriber': "url('/Subscriber.png')",
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        mochiyPop: ['var(--font-mochiy-pop)'],
      },
    },
  },
  plugins: [],
}
export default config
