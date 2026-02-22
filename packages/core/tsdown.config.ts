import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'primitives/index': 'src/primitives/index.ts',
    'conditionals/index': 'src/conditionals/index.ts',
    'guards/index': 'src/guards/index.ts',
    'extractors/index': 'src/extractors/index.ts',
    'mappers/index': 'src/mappers/index.ts',
  },
  format: ['esm'],
  dts: true,
  clean: true,
  minify: true,
  sourcemap: false,
  external: [],
  platform: 'neutral',
  outDir: 'dist',
})