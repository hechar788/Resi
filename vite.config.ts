import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import neon from './neon-vite-plugin.ts'

const config = defineConfig({
  plugins: [
    devtools(),
    neon,
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/__tests__/**/*.{test,spec}.{ts,tsx}'],
    exclude: [...configDefaults.exclude, 'drizzle/**'],
  },
})

export default config
