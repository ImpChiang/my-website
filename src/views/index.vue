<template>

<!--  <main class="main_home">-->
<!--    <section id="home" class="style_home">-->
<!--      <div></div>-->
<!--    </section>-->
<!--    <section id="blog" class="style_blog">-->

<!--    </section>-->
<!--    <section id="tools" class="style_tools">-->

<!--    </section>-->
<!--  </main>-->
</template>

<script type="module" setup>
import { ref, onMounted, reactive } from 'vue'

</script>

<style lang="less" scoped>

.main_home{

  .style_home{
    //padding: 56px 24px 48px;
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
    height: 100vh;
    background-color: #fff;
    background-image: url("../assets/home.svg");
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  .style_blog{
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
    height: 100vh;
    background-color: #fff;
    background-image: url("../assets/second.svg");
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  .style_tools{
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
    height: 100vh;
    background-color: #fff;
    background-image: url("../assets/third.svg");
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    color: #ffffff;
  }
}

</style>
