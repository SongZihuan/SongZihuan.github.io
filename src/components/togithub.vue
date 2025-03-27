<script setup lang="ts">
  import { getRandomInt } from '@/utils/random'
  import CatFont from '/src/assets/font/cat.ttf'

  const toGithub = () => {
    window.open('https://github.com/SongZihuan/')
  }

  const github = ref(getRandomInt() < 10 ? 'Gayhub' : 'Github')

  const resetGithub = () => {
    github.value = 'Github'
  }

  const show = ref(false)
  const load = ref(false)

  const setLoadTrue = () => {
    setTimeout(() => (load.value = true), 1000)
  }

  function handleWindowResize() {
    show.value = window.innerWidth >= 936
  }

  window.addEventListener('resize', handleWindowResize)
  handleWindowResize()
</script>

<template>
  <div v-if="show" v-show="false">
    <el-image :src="CatFont" @load="setLoadTrue" @error="setLoadTrue"></el-image>
  </div>

  <div v-if="load && show" class="leftwin">
    <div class="box">
      <el-text class="box_text" @click="toGithub" @mouseenter="resetGithub"> 前往我的 {{ github }} 主页 </el-text>
    </div>
  </div>
  <div v-else></div>
</template>

<style scoped lang="scss">
  @font-face {
    font-family: 'CatFont'; /* 自定义字体名称 */
    src: url('/src/assets/font/cat.ttf') format('truetype'); /* 指定字体路径和格式 */
    font-weight: normal; /* 字体粗细 */
    font-style: normal; /* 字体样式 */
  }

  $box-bg-color: #9fc5e8;

  .leftwin {
    --box-bg-color: #{$box-bg-color};

    position: fixed;
    left: 0;
    top: calc(1.5rem + 1px);
    transform: translateY(-50%);
    background-color: var(--box-bg-color, $box-bg-color);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
  }

  .box {
    font-family: 'CatFont', sans-serif;
    padding: 5px;
  }

  .box_text {
    font-size: 1.5rem;
    color: white;
  }

  .box_text:hover {
    text-decoration: underline dotted;
  }

  .box_text:active {
    color: var(--box-bg-color, $box-bg-color);
  }
</style>
