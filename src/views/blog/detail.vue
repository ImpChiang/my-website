<template>
  <main class="main-container">
    <div class="detail-wrapper">
      <div class="detail-main-area">
        <h1 class="article-title">{{ data.title }}</h1>
        <div class="detail-info">
          <v-md-preview :text="data.content"></v-md-preview>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import {reactive, ref, UnwrapRef} from 'vue';
import { useRouter } from "vue-router";
import { Api } from "@/axios/api";
interface FormData {
  title: string,
  content: string
}
let data: UnwrapRef<FormData> = reactive({
  title: '',
  content: ''
});
const routerParam = useRouter().currentRoute.value.params
console.log(routerParam,'routerParam')


const detail = Api.article.detail({
  id: routerParam.id
}).then((res: any) => {
  console.log(res,'detail')
  data = Object.assign(data,res.data)

})
</script>

<style lang="less" scoped>
.main-container{
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
  .detail-wrapper{
    margin-top: 1.7rem;
    .detail-main-area{
      padding: 0 2rem;
      position: relative;
      max-width: 100%;
      background-color: #fff;
      border-radius: 2px;
      box-sizing: border-box;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
      .article-title{
        margin: 0.67em 0;
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 1.5;
        width: 100%;
      }
      .detail-info{
        width: 100%;
      }
    }
  }
}
</style>
