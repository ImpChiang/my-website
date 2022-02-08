/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'qs'
declare module 'js-cookie'
declare module '@kangc/v-md-editor'
declare module '@kangc/v-md-editor/lib/theme/github.js'
declare module '@kangc/v-md-editor/lib/preview'

interface ImportMetaEnv {
  readonly VITE_PRD_API: string
  readonly VITE_DEV_API: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
