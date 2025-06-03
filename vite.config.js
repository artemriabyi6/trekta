// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'


// export default defineConfig({
//   plugins: [react()],
//   base: '/trekta',
//    css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `@use "src/styles/variables.scss" as *;`
//       }
//     }
//   }
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { terser } from 'rollup-plugin-terser'
import { visualizer } from 'rollup-plugin-visualizer'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
     compression(),

    // Аналіз бандла (використовуй лише під час дебагу)
    visualizer({ open: false }),

    // Мініфікація (виконується лише під час білду)
    {
      ...terser({
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
        mangle: true,
        format: {
          comments: false,
        },
      }),
      apply: 'build',
    }
  ],
  base: '/trekta',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "src/styles/variables.scss" as *;`
      }
    }
  },
  build: {
    minify: 'terser', // або 'esbuild' якщо хочеш швидший білд
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})

