import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslintPlugin from 'vite-plugin-eslint'
import autoprefixer from 'autoprefixer'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    eslintPlugin({
      include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue', 'src/*.ts', 'src/*.tsx', 'src/*.vue']
    })
  ],
  css: {
    postcss: {
      plugins: [autoprefixer]
    },
    devSourcemap: true,
    modules: {
      localsConvention: 'camelCaseOnly'
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: 'dist',
    minify: 'terser', // 混淆器，terser构建后文件体积更小
    // 清除console和debugger
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    assetsInlineLimit: 1000,
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    }
  },
  server: {
    base: './',
    host: '0.0.0.0',
    hmr: true,
    open: false,
    cors: true
  }
})
