// build/vite.es.config.ts
import { defineConfig } from 'file:///E:/code/veyra/node_modules/.pnpm/vite@5.4.14_@types+node@20._df9e937a4673ea1047858bc9465e9888/node_modules/vite/dist/node/index.js'
import { readdirSync, readdir } from 'fs'
import { resolve } from 'path'
import {
	defer,
	delay,
	filter,
	map,
	includes,
} from 'file:///E:/code/veyra/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js'
import { visualizer } from 'file:///E:/code/veyra/node_modules/.pnpm/rollup-plugin-visualizer@5.14.0_rollup@4.35.0/node_modules/rollup-plugin-visualizer/dist/plugin/index.js'
import { hooksPlugin as hooks } from 'file:///E:/code/veyra/libs/vite-plugins/.dist/index.js'
import shell from 'file:///E:/code/veyra/node_modules/.pnpm/shelljs@0.8.5/node_modules/shelljs/shell.js'
import vue from 'file:///E:/code/veyra/node_modules/.pnpm/@vitejs+plugin-vue@5.2.3_vi_a13f2af0f8b2433a0fc03b77c6c7459c/node_modules/@vitejs/plugin-vue/dist/index.mjs'
import dts from 'file:///E:/code/veyra/node_modules/.pnpm/vite-plugin-dts@3.9.1_@type_433b3836f2c8d39d61d9832f6029852a/node_modules/vite-plugin-dts/dist/index.mjs'
import terser from 'file:///E:/code/veyra/node_modules/.pnpm/@rollup+plugin-terser@0.4.4_rollup@4.35.0/node_modules/@rollup/plugin-terser/dist/es/index.js'
var __vite_injected_original_dirname = 'E:\\code\\veyra\\packages\\core\\build'
var TRY_MOVE_STYLES_DELAY = 750
var isProd = process.env.NODE_ENV === 'production'
var isDev = process.env.NODE_ENV === 'development'
var isTest = process.env.NODE_ENV === 'test'
function getDirectoriesSync(basePath) {
	const entries = readdirSync(basePath, { withFileTypes: true })
	return map(
		filter(entries, (entry) => entry.isDirectory()),
		(entry) => entry.name
	)
}
function moveStyles() {
	readdir('./dist/es/theme', (err) => {
		if (err) return delay(moveStyles, TRY_MOVE_STYLES_DELAY)
		defer(() => shell.mv('./dist/es/theme', './dist'))
	})
}
var vite_es_config_default = defineConfig({
	plugins: [
		vue(),
		visualizer({
			filename: 'dist/stats.es.html',
		}),
		dts({
			tsconfigPath: '../../tsconfig.build.json',
			outDir: 'dist/types',
		}),
		terser({
			compress: {
				sequences: isProd,
				arguments: isProd,
				drop_console: isProd && ['log'],
				drop_debugger: isProd,
				passes: isProd ? 4 : 1,
				global_defs: {
					'@DEV': JSON.stringify(isDev),
					'@PROD': JSON.stringify(isProd),
					'@TEST': JSON.stringify(isTest),
				},
			},
			format: {
				semicolons: false,
				shorthand: isProd,
				braces: !isProd,
				beautify: !isProd,
				comments: !isProd,
			},
			mangle: {
				toplevel: isProd,
				eval: isProd,
				keep_classnames: isDev,
				keep_fnames: isDev,
			},
		}),
		hooks({
			rmFiles: [
				'./dist/es',
				'./dist/theme',
				'./dist/types',
				'./dist/stats.es.html',
			],
			afterBuild: moveStyles,
		}),
	],
	build: {
		outDir: 'dist/es',
		minify: false,
		cssCodeSplit: true,
		sourcemap: !isProd,
		lib: {
			entry: resolve(__vite_injected_original_dirname, '../index.ts'),
			name: 'VeyraUI',
			fileName: 'index',
			formats: ['es'],
		},
		rollupOptions: {
			external: [
				'vue',
				'@fortawesome/fontawesome-svg-core',
				'@fortawesome/free-solid-svg-icons',
				'@fortawesome/vue-fontawesome',
				'@popperjs/core',
				'async-validator',
			],
			output: {
				assetFileNames: (chunkInfo) => {
					if (chunkInfo.name === 'style.css') {
						return 'index.css'
					}
					if (chunkInfo.type === 'asset' && /\.(css)$/i.test(chunkInfo.name)) {
						return 'theme/[name].[ext]'
					}
					return chunkInfo.name
				},
				manualChunks(id) {
					if (includes(id, 'node_modules')) return 'vendor'
					if (includes(id, '/packages/hooks')) return 'hooks'
					if (
						includes(id, '/packages/utils') ||
						includes(id, 'plugin-vue:export-helper')
					)
						return 'utils'
					for (const item of getDirectoriesSync('../components')) {
						if (includes(id, `/packages/components/${item}`)) return item
					}
				},
			},
		},
	},
})
export { vite_es_config_default as default }
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYnVpbGQvdml0ZS5lcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxjb2RlXFxcXFR5Y2hlXFxcXHBhY2thZ2VzXFxcXGNvcmVcXFxcYnVpbGRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGNvZGVcXFxcVHljaGVcXFxccGFja2FnZXNcXFxcY29yZVxcXFxidWlsZFxcXFx2aXRlLmVzLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovY29kZS9UeWNoZS9wYWNrYWdlcy9jb3JlL2J1aWxkL3ZpdGUuZXMuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHsgcmVhZGRpclN5bmMsIHJlYWRkaXIgfSBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IGRlZmVyLCBkZWxheSwgZmlsdGVyLCBtYXAsIGluY2x1ZGVzIH0gZnJvbSBcImxvZGFzaC1lc1wiO1xyXG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSBcInJvbGx1cC1wbHVnaW4tdmlzdWFsaXplclwiO1xyXG5pbXBvcnQgeyBob29rc1BsdWdpbiBhcyBob29rcyB9IGZyb20gXCJAdHljaGUvdml0ZS1wbHVnaW5zXCI7XHJcbmltcG9ydCBzaGVsbCBmcm9tIFwic2hlbGxqc1wiO1xyXG5cclxuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XHJcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xyXG5pbXBvcnQgdGVyc2VyIGZyb20gXCJAcm9sbHVwL3BsdWdpbi10ZXJzZXJcIjtcclxuXHJcbmNvbnN0IFRSWV9NT1ZFX1NUWUxFU19ERUxBWSA9IDc1MCBhcyBjb25zdDtcclxuXHJcbmNvbnN0IGlzUHJvZCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIjtcclxuY29uc3QgaXNEZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiO1xyXG5jb25zdCBpc1Rlc3QgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJ0ZXN0XCI7XHJcblxyXG5mdW5jdGlvbiBnZXREaXJlY3Rvcmllc1N5bmMoYmFzZVBhdGg6IHN0cmluZykge1xyXG4gIGNvbnN0IGVudHJpZXMgPSByZWFkZGlyU3luYyhiYXNlUGF0aCwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pO1xyXG5cclxuICByZXR1cm4gbWFwKFxyXG4gICAgZmlsdGVyKGVudHJpZXMsIChlbnRyeSkgPT4gZW50cnkuaXNEaXJlY3RvcnkoKSksXHJcbiAgICAoZW50cnkpID0+IGVudHJ5Lm5hbWVcclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb3ZlU3R5bGVzKCkge1xyXG4gIHJlYWRkaXIoXCIuL2Rpc3QvZXMvdGhlbWVcIiwgKGVycikgPT4ge1xyXG4gICAgaWYgKGVycikgcmV0dXJuIGRlbGF5KG1vdmVTdHlsZXMsIFRSWV9NT1ZFX1NUWUxFU19ERUxBWSk7XHJcbiAgICBkZWZlcigoKSA9PiBzaGVsbC5tdihcIi4vZGlzdC9lcy90aGVtZVwiLCBcIi4vZGlzdFwiKSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgdnVlKCksXHJcbiAgICB2aXN1YWxpemVyKHtcclxuICAgICAgZmlsZW5hbWU6IFwiZGlzdC9zdGF0cy5lcy5odG1sXCIsXHJcbiAgICB9KSxcclxuICAgIGR0cyh7XHJcbiAgICAgIHRzY29uZmlnUGF0aDogXCIuLi8uLi90c2NvbmZpZy5idWlsZC5qc29uXCIsXHJcbiAgICAgIG91dERpcjogXCJkaXN0L3R5cGVzXCIsXHJcbiAgICB9KSxcclxuICAgIHRlcnNlcih7XHJcbiAgICAgIGNvbXByZXNzOiB7XHJcbiAgICAgICAgc2VxdWVuY2VzOiBpc1Byb2QsXHJcbiAgICAgICAgYXJndW1lbnRzOiBpc1Byb2QsXHJcbiAgICAgICAgZHJvcF9jb25zb2xlOiBpc1Byb2QgJiYgW1wibG9nXCJdLFxyXG4gICAgICAgIGRyb3BfZGVidWdnZXI6IGlzUHJvZCxcclxuICAgICAgICBwYXNzZXM6IGlzUHJvZCA/IDQgOiAxLFxyXG4gICAgICAgIGdsb2JhbF9kZWZzOiB7XHJcbiAgICAgICAgICBcIkBERVZcIjogSlNPTi5zdHJpbmdpZnkoaXNEZXYpLFxyXG4gICAgICAgICAgXCJAUFJPRFwiOiBKU09OLnN0cmluZ2lmeShpc1Byb2QpLFxyXG4gICAgICAgICAgXCJAVEVTVFwiOiBKU09OLnN0cmluZ2lmeShpc1Rlc3QpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1hdDoge1xyXG4gICAgICAgIHNlbWljb2xvbnM6IGZhbHNlLFxyXG4gICAgICAgIHNob3J0aGFuZDogaXNQcm9kLFxyXG4gICAgICAgIGJyYWNlczogIWlzUHJvZCxcclxuICAgICAgICBiZWF1dGlmeTogIWlzUHJvZCxcclxuICAgICAgICBjb21tZW50czogIWlzUHJvZCxcclxuICAgICAgfSxcclxuICAgICAgbWFuZ2xlOiB7XHJcbiAgICAgICAgdG9wbGV2ZWw6IGlzUHJvZCxcclxuICAgICAgICBldmFsOiBpc1Byb2QsXHJcbiAgICAgICAga2VlcF9jbGFzc25hbWVzOiBpc0RldixcclxuICAgICAgICBrZWVwX2ZuYW1lczogaXNEZXYsXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIGhvb2tzKHtcclxuICAgICAgcm1GaWxlczogW1xyXG4gICAgICAgIFwiLi9kaXN0L2VzXCIsXHJcbiAgICAgICAgXCIuL2Rpc3QvdGhlbWVcIixcclxuICAgICAgICBcIi4vZGlzdC90eXBlc1wiLFxyXG4gICAgICAgIFwiLi9kaXN0L3N0YXRzLmVzLmh0bWxcIixcclxuICAgICAgXSxcclxuICAgICAgYWZ0ZXJCdWlsZDogbW92ZVN0eWxlcyxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIG91dERpcjogXCJkaXN0L2VzXCIsXHJcbiAgICBtaW5pZnk6IGZhbHNlLFxyXG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxyXG4gICAgc291cmNlbWFwOiAhaXNQcm9kLFxyXG4gICAgbGliOiB7XHJcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgXCIuLi9pbmRleC50c1wiKSxcclxuICAgICAgbmFtZTogXCJUeWNoZVVJXCIsXHJcbiAgICAgIGZpbGVOYW1lOiBcImluZGV4XCIsXHJcbiAgICAgIGZvcm1hdHM6IFtcImVzXCJdLFxyXG4gICAgfSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgZXh0ZXJuYWw6IFtcclxuICAgICAgICBcInZ1ZVwiLFxyXG4gICAgICAgIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlXCIsXHJcbiAgICAgICAgXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIixcclxuICAgICAgICBcIkBmb3J0YXdlc29tZS92dWUtZm9udGF3ZXNvbWVcIixcclxuICAgICAgICBcIkBwb3BwZXJqcy9jb3JlXCIsXHJcbiAgICAgICAgXCJhc3luYy12YWxpZGF0b3JcIixcclxuICAgICAgXSxcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IChjaHVua0luZm8pID0+IHtcclxuICAgICAgICAgIGlmIChjaHVua0luZm8ubmFtZSA9PT0gXCJzdHlsZS5jc3NcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJpbmRleC5jc3NcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgY2h1bmtJbmZvLnR5cGUgPT09IFwiYXNzZXRcIiAmJlxyXG4gICAgICAgICAgICAvXFwuKGNzcykkL2kudGVzdChjaHVua0luZm8ubmFtZSBhcyBzdHJpbmcpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwidGhlbWUvW25hbWVdLltleHRdXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gY2h1bmtJbmZvLm5hbWUgYXMgc3RyaW5nO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWFudWFsQ2h1bmtzKGlkKSB7XHJcbiAgICAgICAgICBpZiAoaW5jbHVkZXMoaWQsIFwibm9kZV9tb2R1bGVzXCIpKSByZXR1cm4gXCJ2ZW5kb3JcIjtcclxuXHJcbiAgICAgICAgICBpZiAoaW5jbHVkZXMoaWQsIFwiL3BhY2thZ2VzL2hvb2tzXCIpKSByZXR1cm4gXCJob29rc1wiO1xyXG5cclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgaW5jbHVkZXMoaWQsIFwiL3BhY2thZ2VzL3V0aWxzXCIpIHx8XHJcbiAgICAgICAgICAgIGluY2x1ZGVzKGlkLCBcInBsdWdpbi12dWU6ZXhwb3J0LWhlbHBlclwiKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgICByZXR1cm4gXCJ1dGlsc1wiO1xyXG5cclxuICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBnZXREaXJlY3Rvcmllc1N5bmMoXCIuLi9jb21wb25lbnRzXCIpKSB7XHJcbiAgICAgICAgICAgIGlmIChpbmNsdWRlcyhpZCwgYC9wYWNrYWdlcy9jb21wb25lbnRzLyR7aXRlbX1gKSkgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVMsU0FBUyxvQkFBb0I7QUFDcFUsU0FBUyxhQUFhLGVBQWU7QUFDckMsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsT0FBTyxPQUFPLFFBQVEsS0FBSyxnQkFBZ0I7QUFDcEQsU0FBUyxrQkFB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
