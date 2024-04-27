import type {Config} from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    screens: {
      md: '600px',
      lg: '900px',
      xl: '1200px',
    },
    extend: {
      spacing: {
        '1/2': '50%',
      },
      colors: {
        primary: '#5B3FFF',
        primaryLight1: 'rgb(249, 247, 255)',
        primaryLight2: 'rgb(246, 244, 255)',
        primaryLight3: 'rgb(238, 235, 255)',
        primaryDark1: 'rgba(91, 63, 255, 0.25)',
        primaryDark2: 'rgba(91, 63, 255, 0.5)',
        primaryDark3: 'rgb(38, 27, 106)',
        primaryDark4: 'rgb(59, 42, 167)',
        primaryDark5: 'rgb(91, 63, 255)',
        primaryDark6: 'rgba(91, 63, 255, 0.04)',
        grey1: 'rgb(142, 152, 161)',
        blackLight: 'rgba(0, 0, 0, 0.87)',
        blackLight2: 'rgba(0, 0, 0, 0.23)',
        success: 'rgb(34, 197, 94)',
        warn: 'rgb(255, 170, 0)',
        error: 'rgb(211, 47, 47)',
      },
      animation: {
        'reverse-spin': 'reverse-spin 1s linear infinite',
      },
      backgroundImage: {
        hero: "url('/images/background.png')",
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
