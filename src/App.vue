<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Nav from '@/components/nav.vue';
const change = (val: string) => {
  console.log(val,'val---------')
}
</script>

<template>
  <Nav @change="change"></Nav>
  <router-view class="main-view"></router-view>
</template>

<style>
.main-view{
  padding-top: 60px;
  min-height: 100vh;
  position: relative;
  z-index: 10;
  background-color: #ffffff;
}
</style>
