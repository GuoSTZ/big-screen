import { defineConfig } from 'vite'
import json from '@rollup/plugin-json';
import react from '@vitejs/plugin-react-swc'
import vitePluginImp from 'vite-plugin-imp'
import { createHtmlPlugin } from 'vite-plugin-html'
import path from 'path'
import packageJSON from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: packageJSON.port,
  },
  preview: {

  },
  plugins: [
    react(),
    json(),
    // vitePluginImp({
    //   libList: [
    //     {
    //       libName: 'antd',
    //       style: (name) => `antd/lib/${name}/style/index.less`,
    //     },
    //   ],
    // }),
    createHtmlPlugin({
      entry: path.resolve(__dirname, 'src/index.tsx'),
      template: 'public/index.html',
      inject: {
        data: {
          title: packageJSON.name,
          // injectScript: `<script src="./inject.js"></script>`,
        },
      },
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  build: {
    target: 'es2015',
    minify: 'terser',
    rollupOptions: {
      output: {
        // 用于命名代码拆分时创建的共享块的输出命名
        chunkFileNames: 'js/[name]-[hash].js',
        // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
        entryFileNames: 'js/[name]-[hash].js',
        // 用于输出静态资源的命名放到dist中的static文件夹下，[ext]表示文件扩展名
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        manualChunks: {
          // 指定公共依赖的 chunk 名称
          common: [
            'react',
            'react-dom',
            // 'antd'
          ],
        },
      },
    },
  },
})
