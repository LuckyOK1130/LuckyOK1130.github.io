import { defineConfig } from 'vite';

export default defineConfig({
	base: './',
	server: {
		port: 3000
	},
	build: {
		rollupOptions: {
			input: ['index.html','doWhat.html','whatDO.html','market.html','news1.html','news2.html','news3.html','news4.html','pictorialBook-burugang.html','pictorialBook-niaogang.html','pictorialBook-paxinggang.html']
		},
		outDir: './dist/',
		minify: true,
		emptyOutDir: true
	}
});
