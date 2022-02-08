import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    Components({
      resolvers: [
        AntDesignVueResolver()
      ],
      // globalComponentsDeclaration
      dts: true,
      // customLoaderMatcher
      include: [/\\.vue$/, /\\.vue\\?vue/, /\\.md$/]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname,'src')  // 设置 `@` 指向 `src` 目录
    },
    extensions: ['.js','.ts','.vue','.json']
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  },
  base: '/',// 设置打包路径
  build:{
    outDir: 'dist'
  },
  server: {
    // host: '192.168.71.151',
    // host: '127.0.0.1',
    port: 9966,
    open: true,
    cors: false,
    // proxy: {
    //   '/api': {
    //     target: 'http://192.168.71.151:9900',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  }
})
