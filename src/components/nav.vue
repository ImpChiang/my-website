<template>
<div class="nav-wrap">
  <div class="text-logo"></div>
  <ul class="nav-item-wrap">
    <li :class="['nav-item hvr-underline-from-center', state.currentIndex == index ? 'nav-item-active':'']" @click="handleEmitMsg(index,item)" v-for="(item,index) in state.items" :key="index">{{ item.name }}</li>
    <li v-if="!state.isLogin" class="login-btn" @click="handleLogin">登录</li>
    <li v-if="!state.isLogin" class="">|</li>
    <li v-if="!state.isLogin" class="login-btn" @click="handleRegist">注册</li>
  </ul>
</div>
<a-modal
    :visible="state.loginVisible"
    :footer="null"
    :centered="state.centered"
    @cancel="handleLogin" >
    <a-form class="login-form" :model="formState" :rules="rules" ref="formRef" :wrapper-col="state.wrapperCol">
      <a-form-item name="user" required>
        <a-input
            v-model:value="formState.user"
            placeholder="请输入手机号"
            :maxlength="11"
            size="large"
        >
          <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
        </a-input>
      </a-form-item>
      <a-form-item name="password" required>
        <a-input
            v-model:value="formState.password"
            type="password"
            placeholder="请输入密码"
            size="large"
        >
          <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
        </a-input>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 4, offset: 10 }">
        <a-button type="primary" @click="onsubmit" :disabled="formState.user === '' || formState.password === ''">登 录</a-button>
      </a-form-item>
    </a-form>
</a-modal>
</template>

<script setup lang="ts">
import { reactive,toRefs, UnwrapRef, ref,toRaw } from 'vue'
import { useRouter } from "vue-router";
// import router from '../router'
import { message } from "ant-design-vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { RuleObject,ValidateErrorEntity } from "ant-design-vue/es/form/interface";
import { Api } from "@/axios/api";
import { SetToken, GetToken } from '../utils/authorization';

const router = useRouter()

interface IFoo {
  items: Array<any>,
  currentIndex: number,
  loginVisible: boolean,
  centered: boolean,
  wrapperCol: Object,
  isLogin: boolean
}
const formRef = ref()
interface FormState  {
  user: string,
  password: string
}
const formState: UnwrapRef<FormState> = reactive({
  user: '',
  password: ''
})
const validateMobile = async (rule: RuleObject, value: number) => {
  if (!value) {
    return Promise.reject('请输入手机号');
  }
  const reg = /^1[3456789]\d{9}$/
  if (!reg.test(formState.user)) {
    return Promise.reject('请输入正确手机号');
  } else {
    return Promise.resolve();
  }
}
const rules = {
  user: [
    { required: true, validator: validateMobile, trigger: 'blur' }
  ],
  password: [{ required: true,message: '请输入密码', trigger: 'blur' }]
}
const state = reactive<IFoo>({
  items: [
    { name: '首页', path: '/' },
    { name: '博客', path: '/blog' },
    { name: '工具', path: '/tools' },
  ],
  currentIndex: 0,
  loginVisible: false,
  centered: true,
  wrapperCol: {
    span: 24
  },
  isLogin: false
})
console.log(GetToken(),'GetToken()')
state.isLogin = GetToken() ? true : false

// const props = defineProps<{
//   msg: String
// }>()
// const { msg } = toRefs(props)

const handleLogin = () => {
  state.loginVisible = !state.loginVisible
}
const handleRegist = () => {
  message.warning('暂不开放注册！！！');
}
const onsubmit = () => {
  formRef.value.validate().then(() => {
    console.log('values', formState, toRaw(formState));
    Api.common.login({
      mobile:formState.user,
      password: formState.password
    }).then((res:any) => {
      console.log(res,'onsubmit')
      if (res.code == 200) {
        const token = res.data.token
        SetToken(token)
        message.success(res.msg)
        state.loginVisible = false
        state.isLogin = true
        setTimeout(() => {
          router.push({
            path: '/admin/editor'
          })
        },500)
      } else {
        message.error(res.msg)
      }
    })
  }).catch((error: ValidateErrorEntity<FormState>) => {
    console.log('error', error);
  })
}

const handleEmit = defineEmits<{
  (e: 'change', value: string): void
}>()
const handleEmitMsg = (index: number,item: any) => {
  console.log('222')
  state.currentIndex = index
  router.push({
    path: item.path
  })
}

</script>

<style lang="less" scoped>
.nav-wrap{
  padding: 0 130px;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 13;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%);
  .text-logo{
    font-size: 30px;
    color: #000c17;
    font-family: HongLei, SiYuanHeiTi, Helvetica, Arial, sans-serif;
  }
  .nav-item-wrap{
    display: flex;
    align-items: center;
    justify-content: center;
    .nav-item{
      width: 120px;
      text-align: center;
      line-height: 1.5;
      padding: 8px 0;
      cursor: pointer;
      font-size: 1.2em;
      font-weight: 700;
      letter-spacing: 1.5px;
      position: relative;
    }
    .nav-item-active{
      color: #07862b;
    }
    .nav-item-active:after{
      content: "";
      position: absolute;
      z-index: 2;
      left: 25%;
      right: 25%;
      bottom: 0;
      background: #07862b;
      height: 4px;
    }
    .login-btn{
      color: #000a17;
      margin: 0 20px;
      font-size: 18px;
      cursor: pointer;
    }
  }
}
.login-form{
  padding: 35px 40px 0;
}
</style>
