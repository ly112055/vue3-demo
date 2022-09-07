import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	css: {
		// css预处理器
		preprocessorOptions: {
			less: {
				charset: false,
				additionalData: '@import "./src/assets/style/global.less";',
			},
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@views": path.resolve(__dirname, "./src/views"),
			"@api": path.resolve(__dirname, "./src/api"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@pinia": path.resolve(__dirname, "./src/pinia"),
		},
	},
});
