<script setup lang="ts">
  import 'normalize.css'
  import { placeholderLoading } from '@/utils/placeholder-loading'
  import Logo from '@/assets/images/logo-icon.png'

  function setIcon() {
    // 动态设置favicon
    const link = document.createElement('link')
    link.rel = 'shortcut icon'
    link.href = Logo // 或者 favicon.png 对于PNG格式
    document.head.appendChild(link)
  }

  document.addEventListener('DOMContentLoaded', setIcon)

  placeholderLoading()
</script>

<template>
  <router-view></router-view>
</template>

<style>
  body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f8f8f8;
  }
</style>
