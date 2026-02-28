import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: {
      index: 'packages/index.ts',
      
      // core module
      "core/index": "packages/core/index.ts",
      "core/primitives/index": "packages/core/primitives/index.ts",
      "core/conditionals/index": "packages/core/conditionals/index.ts",
      "core/guards/index": "packages/core/guards/index.ts",
      "core/extractors/index": "packages/core/extractors/index.ts",
      "core/mappers/index": "packages/core/mappers/index.ts",
  },
  format: ['esm'],
  dts: {
    sourcemap: false,
    build: true,
    compilerOptions: {
      sourceMap: false,
    },
  },
  clean: true,
  minify: true,
  sourcemap: false,
  platform: 'neutral',
  outDir: 'dist',
})