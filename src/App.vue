<script setup lang="ts">
  import 'normalize.css'
  import { placeholderLoading } from '@/utils/placeholder-loading'
  import Logo from '@/assets/images/logo-icon.png'

  const show = ref(false)
  function handleWindowResize() {
    show.value = window.innerWidth >= 330
  }
  window.addEventListener('resize', handleWindowResize)
  handleWindowResize()

  function setIcon() {
    // 动态设置favicon
    const link = document.createElement('link')
    link.rel = 'shortcut icon'
    link.href = Logo // 或者 favicon.png 对于PNG格式
    document.head.appendChild(link)
  }

  document.addEventListener('DOMContentLoaded', setIcon)

  const hostname = window.location.hostname
  const githubDialogVisible = ref(false)

  if (hostname === 'songzihuan.github.io') {
    githubDialogVisible.value = true
  }

  const onClose = () => {
    githubDialogVisible.value = false
  }

  const toWebsite1 = () => {
    window.location.href = 'https://song-zh.com'
  }

  const toWebsite2 = () => {
    window.location.href = 'https://www.song-zh.com'
  }

  placeholderLoading()
</script>

<template>
  <div v-if="show">
    <router-view></router-view>
    <el-dialog v-model="githubDialogVisible" title="警告">
      <div>
        您当前访问的站点是由 Github Page 所托管。但本项目为 Vue3 的单页项目（SPA）。Github Page
        无法提供很好的支持，因此建议你访问主站。
        <br />
        主站地址1：https://song-zh.com
        <br />
        主站地址2：https://www.song-zh.com
      </div>
      <template #footer>
        <div class="dialog-footer">
          <div class="center_btn_box">
            <el-button class="btn" type="success" @click="toWebsite1">前往主站地址1</el-button>
            <el-button class="btn" type="primary" @click="toWebsite2">前往主站地址2</el-button>
            <el-button class="btn" type="warning" @click="onClose">关闭</el-button>
          </div>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style>
  body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f8f8f8;
  }
</style>

<style scoped lang="scss">
  .center_btn_box {
    text-align: center;
  }

  .center_btn_box .btn {
    margin: 5px;
  }

  .dialog-footer {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
</style>
