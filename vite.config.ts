/*
 * @Author:
 * @Date: 2023-10-08 13:21:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-10-09 14:52:47
 * @Description: 请填写简介
 */
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
	base: "./", // 设置打包路径
	plugins: [vue(), dts()],
	resolve: {
		// 配置路径别名
		alias: {
			"@": resolve(__dirname, "src"),
		},
	},
	build: {
		lib: {
			// 注意此处的路径要配置正确
			entry: resolve("src/package/index.ts"),
			name: "SEchart",
			fileName: (format) => `SEchart.${format}.js`,
		},
		// 自定义构建配置，可直接调整底层Rollup选项；Rollup有一套预设
		// https://rollupjs.org/guide/en/#big-list-of-options
		rollupOptions: {
			// 确保外部化处理那些你不想打包进库的依赖
			external: ["vue", "s-echart"],
			output: {
				// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				globals: {
					vue: "Vue",
				},
			},
		},
	},
});
