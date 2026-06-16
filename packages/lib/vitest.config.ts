import { defineConfig } from 'vitest/config';

export default defineConfig({ test: { watch: false, environment: 'happy-dom', setupFiles: ['./src/test/setup.ts'] } });
