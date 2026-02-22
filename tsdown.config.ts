import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  minify: false,
  sourcemap: true,
  external: ['@glitchproof/typenator/core'],
  platform: 'neutral',
  outDir: 'dist',
})
