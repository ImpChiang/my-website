import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { Button, Row, Col, Modal, Form,Input } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './style.less'

import VMdEditor from '@kangc/v-md-editor'
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js' // 主题
import '@kangc/v-md-editor/lib/style/base-editor.css'
import '@kangc/v-md-editor/lib/style/preview.css';
import '@kangc/v-md-editor/lib/theme/style/github.css'
import hljs from 'highlight.js';
import json from 'highlight.js/lib/languages/json'; //// 按需引入语言包
hljs.registerLanguage('json', json);
VMdEditor.use(githubTheme, {
    Hljs: hljs
})
VMdPreview.use(githubTheme, {
    Hljs: hljs,
});

const app = createApp(App)
app.use(Button).use(Row).use(Col).use(Modal).use(Form).use(Input)
app.use(VMdEditor).use(VMdPreview)
app.use(router).mount('#app')


