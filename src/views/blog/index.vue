<template>
  <div class="blog-container">
    <div class="article-list-wrap">
      <li class="article-list" v-for="item in data" :key="item.id">
        <div class="meta-container">
          <div class="date">{{ formatTime(item.createTime,'format') }}</div>
        </div>
        <div class="content-wrapper">
          <div class="content-main">
            <a :href="'/blog/detail/'+item.id" target="_blank">
              <div class="title-row">{{ item.title }}</div>
              <div class="abstract">{{item.abstract}}</div>
            </a>
            <ul class="action-list">
              <li class="action-item">
                <i class="view-icon"></i> <span>8999</span>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
import { Api } from "@/axios/api";
import { formatTime } from '@/utils/index'
// interface FormObj {
//   [propName: string]: string|number
// }
// interface TableProps {
//   rows: Array<IRowsItem>
// }
const data: any = ref([]);


const list = Api.article.list().then((res: any) => {
  console.log(res,'list')
  data.value = res.data
})
</script>

<style lang="less" scoped>
.blog-container{
  position: relative;
  margin: 20px auto 0;
  width: 100%;
  max-width: 960px;
  .article-list-wrap{
    width: 100%;
    background-color: #ffffff;
    .article-list{
      cursor: pointer;
      position: relative;
      padding: 12px 20px 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .meta-container{
        display: flex;
        align-items: center;
        .date{
          color: #86909c;
          font-size: 13px;
        }
      }
      .content-wrapper{
        display: flex;
        padding-bottom: 12px;
        border-bottom: 1px solid #e5e6eb;
        margin-top: 10px;
        width: 100%;
        .content-main{
          flex: 1 1 auto;
          .title-row{
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            color: #1d2129;
            width: 100%;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
          }
          .abstract{
            color: #86909c;
            font-size: 13px;
            line-height: 22px;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            margin: 10px 0;
          }
          .action-list{
            display: flex;
            align-items: center;
            .action-item{
              position: relative;
              margin-right: 20px;
              font-size: 13px;
              line-height: 20px;
              color: #4e5969;
              flex-shrink: 0;
              display: flex;
              align-items: center;
              .view-icon{
                display: block;
                width: 16px;
                height: 16px;
                background-size: 100%;
                background-image: url("../../assets/icon/view.png");
                margin-right: 4px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
