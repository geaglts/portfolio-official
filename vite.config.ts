import { defineConfig } from 'vite';
import viteTypescriptPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/',
	plugins: [react(), viteTypescriptPaths()],
});
