<template>
  <div class="tools-list-wrap">
    <div class="tools-list" v-for="(obj,ind) in state.list" :key="ind">
      <p class="tool-title">{{obj.title}}</p>
      <div class="list">
        <a-row>
          <a-col :xs="15" :sm="15" :md="12" :lg="8" :xl="6" v-for="(item,index) in obj.content" :key="index">
            <div class="hvr-float-shadow list-item" >
              <a class="list-header" :href="item.link" target="_blank">
                <img v-if="item.logo" class="logo" :src="item.logo" alt=""> <span>{{item.name}}</span>
              </a>
              <p class="desc twomg">{{item.desc}}</p>
              <div class="list-bottom"><a :href="item.githubUrl" target="_blank"><img class="github-icon" src="https://b.yzcdn.cn/vant/logo/github.svg" alt=""></a></div>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ITool {
  list: Array<any>
}
import { reactive,toRefs } from 'vue'

const state = reactive<ITool>({
  list: [
    {
      title: '前端资源',
      content: [
        { logo: 'https://yeunsun.cn/static/react.svg', link: 'https://reactjs.org/', name: 'React',  desc: '用于构建用户界面的 JavaScript 库', githubUrl: 'https://github.com/facebook/react'},
        { logo: 'https://cn.vuejs.org/images/logo.svg', link: 'https://cn.vuejs.org/', name: 'Vue2',  desc: '渐进式 JavaScript 框架', githubUrl: 'https://github.com/vuejs/vue'},
        { logo: 'https://cn.vuejs.org/images/logo.svg', link: 'https://v3.cn.vuejs.org/', name: 'Vue3',  desc: '渐进式 JavaScript 框架', githubUrl: 'https://github.com/vuejs/vue-next'},
        { logo: 'https://angular.cn/assets/images/logos/angular/angular.svg', link: 'https://angular.cn/', name: 'Angular',  desc: '现代 Web 开发平台', githubUrl: 'https://github.com/angular/angular'},
      ]
    },
    {
      title: 'Vue（Mobile）',
      content: [
        { logo: 'https://img01.yzcdn.cn/vant/logo.png', link: 'https://youzan.github.io/vant/#/zh-CN/', name: 'Vant',  desc: '轻量、可靠的移动端 Vue 组件库', githubUrl: 'https://github.com/youzan/vant'},
        { logo: 'https://nutui.jd.com/3x/3.1.11/logo-red.png', link: 'https://nutui.jd.com/#/', name: 'NUTUI', desc: '京东风格的轻量级移动端 Vue 组件库京东风格的轻量级移动端 Vue 组件库', githubUrl: 'https://github.com/jdf2e/nutui'},
        { logo: 'https://cdn.docschina.org/home/logo/cube.png', link: 'https://didi.github.io/cube-ui/#/zh-CN', name: 'Cube UI', desc: '基于 Vue 实现的精致移动端组件库', githubUrl: 'https://github.com/didi/cube-ui'},
      ]
    },{
      title: '小程序框架',
      content: [
        { logo: 'https://img20.360buyimg.com/ling/jfs/t1/20876/36/12835/3043/5c9c2929Ed18cfb11/15b1c03ec830ab8e.png', link: 'https://taro.jd.com/', name: 'Taro',  desc: '多端统一开发解决方案', githubUrl: 'https://github.com/NervJS/taro' },
        { logo: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/9a952c80-6080-11eb-a16f-5b3e54966275.png', link: 'https://uniapp.dcloud.io/', name: 'uni-app',  desc: '一个使用 Vue.js 开发所有前端应用的框架', githubUrl: 'https://github.com/dcloudio/uni-app' },
        { logo: 'https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ', link: 'https://remaxjs.org/', name: 'Remax',  desc: '使用真正的 React 构建跨平台小程序', githubUrl: 'https://github.com/remaxjs/remax' },
      ]
    },{
      title: 'React（Mobile）',
      content: [
        { logo: 'https://yeunsun.cn/static/react.svg', link: 'https://reactnative.cn/', name: 'React Native',  desc: '一次学习，随处编写', githubUrl: 'https://github.com/facebook/react-native'},
        { logo: 'https://gw.alipayobjects.com/zos/bmw-prod/35ca3037-6905-46d7-824f-1ef82da29059.svg', link: 'https://mobile.ant.design/', name: 'Ant Design Mobile', desc: '一个基于 Preact / React / React Native 的 UI 组件库', githubUrl: 'https://github.com/ant-design/ant-design-mobile/'},
        { logo: 'https://zarm.design/images/logo.1a6cfc30.svg', link: 'https://zarm.gitee.io/#/', name: 'Zarm Design', desc: '基于 React、React-Native 的一款适用于企业级的移动端 UI 组件库', githubUrl: 'https://github.com/ZhongAnTech/zarm'},
      ]
    },{
      title: 'Vue（PC）',
      content: [
        { logo: 'https://yeunsun.cn/static/elementUI.svg', link: 'https://element.eleme.cn/#/zh-CN', name: 'Element UI',  desc: 'Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库', githubUrl: 'https://github.com/elemefe'},
        { logo: 'https://file.iviewui.com/dist/d6fcbeecd3f5ff1b1dd0a0f68bdf6ce7.svg', link: 'https://www.iviewui.com/', name: 'ViewUI',  desc: '一套基于 Vue.js 的高质量 UI 组件库', githubUrl: 'https://github.com/view-design/ViewUI'},
        { logo: 'https://yeunsun.cn/static/vuetify.svg', link: 'https://vuetifyjs.com/zh-Hans/', name: 'vuetify',  desc: '一个纯手工精心打造的 Material 样式的 Vue UI 组件库', githubUrl: 'https://github.com/vuetifyjs/vuetify'},
        { logo: 'https://yeunsun.cn/static/nuxtjs.svg', link: 'https://www.nuxtjs.cn/', name: 'NuxtJS',  desc: 'Nuxt.js 是一个基于 Vue.js 的轻量级应用框架，可用来创建服务端渲染 (SSR) 应用，也可充当静态站点引擎生成静态站点应用，具有优雅的代码结构分层和热加载等特性。', githubUrl: 'https://github.com/nuxt/nuxt.js'},
      ]
    },{
      title: 'React（PC）',
      content: [
        { logo: 'https://yeunsun.cn/static/preact.svg', link: 'https://preactjs.com/', name: 'Preact',  desc: 'React 的 3kb 轻量化方案，拥有同样的 ES6 API', githubUrl: 'https://github.com/preactjs/preact'},
        { logo: 'https://yeunsun.cn/static/umi.png', link: 'https://umijs.org/zh-CN', name: 'UmiJS',  desc: '插件化的企业级前端应用框架', githubUrl: 'https://github.com/umijs/umi'},
        { logo: '', link: 'https://dvajs.com/', name: 'DvaJS',  desc: '基于React和redux、轻量级和elm风格的框架。', githubUrl: 'https://github.com/dvajs/dva'},
        { logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', link: 'https://ant.design/index-cn', name: 'Ant Design',  desc: '企业级产品设计体系，创造高效愉悦的工作体验', githubUrl: 'https://github.com/ant-design/ant-design/'},
        { logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', link: 'https://pro.ant.design/index-cn', name: 'Ant Design Pro',  desc: '开箱即用的中台前端/设计解决方案', githubUrl: 'https://github.com/ant-design/ant-design-pro'},
        { logo: 'https://yeunsun.cn/static/elementUI.svg', link: 'https://elemefe.github.io/element-react/#/zh-CN/quick-start', name: 'Element React',  desc: 'Element UI 的 React 实现', githubUrl: 'https://github.com/ElemeFE/element-react'},
        { logo: 'https://img01.yzcdn.cn/vant/logo.png', link: 'https://youzan.github.io/zent/zh/guides/install', name: 'Zent',  desc: '有赞 PC 端 WebUI 规范的 React 实现', githubUrl: 'https://github.com/youzan/zent'},
        { logo: 'https://yeunsun.cn/static/nerv.png', link: 'https://nerv.aotu.io/', name: 'Nerv',  desc: '一个基于 Virtual DOM 的类 React 组件框架', githubUrl: 'https://github.com/NervJS/nerv'},
      ]
    },{
      title: 'Angular',
      content: [
        { logo: 'https://yeunsun.cn/static/elementUI.svg', link: 'https://element-angular.faas.ele.me/guide/install', name: 'Element Angular',  desc: 'Element UI 的 Angular 实现', githubUrl: 'https://github.com/ElemeFE/element-angular'},
        { logo: 'https://ng.ant.design/assets/img/logo.svg', link: 'https://ng.ant.design/docs/introduce/zh', name: 'NG-ZORRO',  desc: '遵循 Ant Design 设计规范的 Angular UI 组件库，主要用于研发企业级中后台产品', githubUrl: 'https://github.com/NG-ZORRO/ng-zorro-antd'},
        { logo: 'https://ng-alain.com/assets/img/logo-color.svg', link: 'https://ng-alain.com/zh', name: 'NG-ALAIN',  desc: '一个基于 Antd 中后台前端解决方案，提供更多通用性业务模块，让开发者更加专注于业务', githubUrl: 'https://github.com/ng-alain/ng-alain/'},
        { logo: 'https://yeunsun.cn/static/ionic.png', link: 'https://ionicframework.com/', name: 'Ionic',  desc: '移动端跨平台 UI', githubUrl: 'https://github.com/ionic-team/ionic-framework'},
      ]
    },{
      title: 'Node.js',
      content: [
        { logo: 'https://yeunsun.cn/static/ionic.png', link: 'http://expressjs.com/zh-cn/', name: 'Express',  desc: '高度包容、快速而极简的 Node.js Web 框架', githubUrl: 'https://github.com/expressjs/express'},
        { logo: 'https://koa.bootcss.com/public/images/koa-logo.png', link: 'https://koa.bootcss.com/', name: 'Koa',  desc: '基于 Node.js 平台的下一代 web 开发框架', githubUrl: 'https://github.com/koajs/koa'},
        { logo: 'https://zos.alipayobjects.com/rmsportal/VTcUYAaoKqXyHJbLAPyF.svg', link: 'https://eggjs.org/zh-cn/', name: 'egg',  desc: '为企业级框架和应用而生', githubUrl: 'https://github.com/eggjs/egg/'},
        { logo: 'https://docs.nestjs.cn/_media/icon.svg', link: 'https://docs.nestjs.cn/', name: 'Nest',  desc: '用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js框架', githubUrl: 'https://github.com/nestjs/nest'},
        { logo: 'https://yeunsun.cn/static/npm.png', link: 'https://www.npmjs.com/', name: 'npm',  desc: 'npm 是 JavaScript package 管理工具，在这里可以找到可复用代码，并以强大的全新方式进行聚合', githubUrl: 'https://github.com/npm'},
        { logo: 'https://yeunsun.cn/static/yarn.svg', link: 'https://yarnpkg.com/getting-started/migration', name: 'yarn',  desc: '快速、可靠、安全的依赖管理', githubUrl: 'https://github.com/yarnpkg/berry'},
        { logo: 'https://d33wubrfki0l68.cloudfront.net/2f3acb83b7d2349f2194bc38c0f22f295908dc33/6a6e6/zh/img/pnpm-no-name-with-frame.svg', link: 'https://pnpm.io/zh/', name: 'pnpm',  desc: '快速的，节省磁盘空间的包管理工具', githubUrl: 'https://github.com/pnpm/pnpm'},
        { logo: 'https://user-images.githubusercontent.com/13700/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png', link: 'https://nodemon.io/', name: 'nodemon',  desc: '监视node.js应用程序中的任何更改并自动重启服务器', githubUrl: 'https://github.com/remy/nodemon/'},
        { logo: 'https://pm2.keymetrics.io/assets/pm2-logo-1.png', link: 'https://pm2.keymetrics.io/', name: 'pm2',  desc: '一个守护进程管理器，它将帮助您管理和保持您的应用程序 24/7 在线', githubUrl: 'https://github.com/Unitech/pm2'},
      ]
    }
  ]
})
</script>

<style scoped lang="less">
.tools-list-wrap{
  padding: 60px 25px;
  .tools-list{
    margin: 40px 0;
    .tool-title{
      color: #2db7f5;
      height: 44px;
      margin-right: 20px;
      display: flex;
      align-items: center;
      font-weight: bold;
      border-bottom: 1px solid #ebebeb;
      padding: 0 25px;
      position: relative;
      font-size: 20px;
    }
    .tool-title:before{
      display: block;
      content: '';
      position: absolute;
      left: 0;
      top: 12px;
      bottom: 12px;
      width: 4px;
      background: linear-gradient(#2db7f5, #6bc30d);
    }
    .list{
      margin-top: 20px;
      .list-item{
        margin: 0px 20px 20px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        //flex: 1 1;
        height: 150px;
        background-color: #fafafa;
        .list-header{
          font-size: 18px;
          color: #4d6891;
          text-align: left;
          margin: 15px 20px 0;
          display: flex;
          align-items: center;
          cursor: pointer;
          .list-header-a{
            display: block;
          }
          .logo{
            width: auto;
            height: 39px;
            margin-right: 20px;
          }
        }
        .desc{
          color: #727171;
          font-size: 14px;
          padding: 0 20px;
          line-height: 1.5;
        }
        .list-bottom{
          background: #c3c4ce;
          display: flex;
          flex-direction: row;
          padding-left: 14px;
          align-items: center;
          //margin-top: 15px;
          .github-icon{
            width: 20px;
            height: 20px;
            margin: 5px 0;
          }
        }
      }
    }
  }
}
</style>
