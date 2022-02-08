<template>
  <div class="header">
    <input v-model="editorState.title" type="text" placeholder="请输入文章标题" maxlength="80" class="title-input">
    <div>
      <a-button type="primary" @click="submit">发布</a-button>
    </div>
  </div>
  <v-md-editor
      v-model="editorState.text"
      :disabled-menus="[]"
      height="600px"
      @upload-image="handleUploadImage"
      @change="textChange"
      @save="textSave" />
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { Api } from "@/axios/api";
import { useRouter } from "vue-router";


import {message} from "ant-design-vue";

const router = useRouter()

interface EditorState {
  title: string,
  text: string,
  updateTimer: null,
  sendHtml: string
}
const editorState = reactive<EditorState>({
  title: '',
  text: '',
  updateTimer: null,
  sendHtml: ''
})

const textChange = (text:string, html:string) => {
  console.log(text,html,'textChange')
  if (editorState.updateTimer) {
    clearTimeout(editorState.updateTimer)
  }
  // editorState.updateTimer = setTimeout(() => {
  //   autoSave(html)
  //   editorState.updateTimer = null
  // },10000)
}
const autoSave = (html: string) => {
  editorState.sendHtml = html
}
const textSave = (text:any, html:any) => {
  console.log(text,html,'textSave')
  editorState.sendHtml = html
}
const handleUploadImage = (event: any,insertImage: any,files: any) => {
  const file = event.target.files[0]
  let param = new FormData()  // 创建form对象
  param.append('file', file)  // 通过append向form对象添加数据
  console.log(param,'param-----------')
  Api.files.upload(param).then((res: any) => {
    console.log(res,'api-----res')
    if (res.code == 200) {
      const url = res.data.path
      insertImage({
        url: url,
        desc: res.data.originalname,
        width: 'auto',
        height: 'auto',
      });
    }
  })

}
const submit = () => {
  console.log(editorState.text,'html',editorState.sendHtml)
  if (!editorState.sendHtml) {
    message.info('请保存内容')
    return
  }
  Api.article.save({
    title: editorState.title,
    content: editorState.sendHtml,
    abstract: '',
    isDraft: 0
  }).then((res: any) => {
    console.log(res,'save')
    if (res.code == 200) {
      message.success(res.msg)
      setTimeout(() => {
        // router.replace('/')
      },500)
    }
  })
}

</script>

<style lang="less" scoped>
.header{
  display: flex;
  align-items: center;
  padding: 0 27px;
  height: 5.334rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  margin-top: 60px;
  .title-input{
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 24px;
    font-weight: 500;
    color: #1d2129;
    border: none;
    outline: none;
  }
}
</style>
