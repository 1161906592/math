import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    alias: {
      '@liuyang0826/mathjs': resolve('src'),
    },
    globals: true,
  },
})
