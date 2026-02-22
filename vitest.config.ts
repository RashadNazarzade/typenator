import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['packages/**/tests/**/*.test.ts', 'packages/**/src/**/*.test.ts'],
    typecheck: {
      enabled: true,
      include: ['packages/*/tests/**/*.test-d.ts'],
    }, 
  },
})
