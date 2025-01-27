<script setup lang="ts">
  import { getRandomInt } from '@/utils/random'

  const toGithub = () => {
    window.open('https://github.com/SongZihuan/')
  }

  const github = ref(getRandomInt() < 10 ? 'Gayhub' : 'Github')

  const resetGithub = () => {
    github.value = 'Github'
  }

  const show = ref(false)

  function handleWindowResize() {
    if (window.innerWidth < 936) {
      show.value = false
    } else {
      show.value = true
    }
  }
  window.addEventListener('resize', handleWindowResize)
  handleWindowResize()
</script>

<template>
  <div v-if="show" class="leftwin">
    <div class="box">
      <el-text class="box_text" @click="toGithub" @mouseenter="resetGithub"> 前往我的 {{ github }} 主页 </el-text>
    </div>
  </div>
  <div v-else></div>
</template>

<style scoped lang="scss">
  $box-bg-color: #2448aa;

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
