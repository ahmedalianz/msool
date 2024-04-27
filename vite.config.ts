import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import svgrPlugin from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';
import { createHtmlPlugin } from 'vite-plugin-html';
import istanbul from 'vite-plugin-istanbul';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://localhost:8080',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  preview: {
    port: 4000,
  },
  build: {
    outDir: './build',
  },
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
  esbuild: {
    pure: ['console.log', 'console.error', 'console.warn', 'console.debug', 'console.trace'],
  },
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, './src/pages'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@interfaces': path.resolve(__dirname, './src/interfaces'),
      '@context': path.resolve(__dirname, './src/context'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@services': path.resolve(__dirname, './src/services'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@config': path.resolve(__dirname, './src/config'),
    },
  },
  envDir: './environments',
  publicDir: './src/assets/public',
  plugins: [
    react({}),
    istanbul({
      include: 'src/*',
      exclude: ['node_modules', 'tests'],
      extension: ['.ts', '.tsx', '.jsx', '.js'],
      requireEnv: false,
      forceBuildInstrument: true,
    }),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
    createHtmlPlugin(),
    checker({
      typescript: true,
    }),
  ],
  css: {
    modules: {
      localsConvention: 'dashes',
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },

      scss: {},
    },
  },
});
