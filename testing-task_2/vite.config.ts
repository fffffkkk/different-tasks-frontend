/// <reference types="vite-plugin-svgr/client" />
/// <reference types='vite/client' />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/components'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@styles': path.resolve(__dirname, './src/styles'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@UI': path.resolve(__dirname, './src/components/UI'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@services': path.resolve(__dirname, './src/services'),
			'@scss': path.resolve(__dirname, './src/scss'),
			'@models': path.resolve(__dirname, './src/models'),
		},
	},
});
