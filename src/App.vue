<script setup lang="ts">
  import 'normalize.css'
  import { placeholderLoading } from '@/utils/placeholder-loading'
  import { isWeixinBrowser } from '@/utils/ua'

  import Logo from './assets/images/logo.png'
  import LogoBig from './assets/images/logo_big.png'

  const title = import.meta.env.VITE_WEBSITE_NAME || '未命名站点'
  window.title = title
  window.description = import.meta.env.VITE_WEBSITE_NAME || ''
  document.title = window.title

  const metaViewport = document.createElement('meta')
  metaViewport.setAttribute('name', 'viewport')
  metaViewport.setAttribute('content', 'width=device-width, initial-scale=1')
  document.head.appendChild(metaViewport)

  const metaDescription = document.createElement('meta')
  metaDescription.setAttribute('name', 'description')
  metaDescription.setAttribute('content', window.description)
  document.head.appendChild(metaDescription)

  const metaKeywords = document.createElement('meta')
  metaKeywords.setAttribute('name', 'keywords')
  metaKeywords.setAttribute('content', '宋子桓, Song Zihuan, Open Source, 开源, 贡献, 赞助, Github')
  document.head.appendChild(metaKeywords)

  const metaLang = document.createElement('meta')
  metaLang.setAttribute('http-equiv', 'Content-Language')
  metaLang.setAttribute('content', 'zh-CN') // 例如，设定为简体中文
  document.head.appendChild(metaLang)

  // Open Graph: 网页标题
  const metaOgTitle = document.createElement('meta')
  metaOgTitle.setAttribute('property', 'og:title')
  metaOgTitle.setAttribute('content', window.title)
  document.head.appendChild(metaOgTitle)

  // Open Graph: 网页描述
  const metaOgDesc = document.createElement('meta')
  metaOgDesc.setAttribute('property', 'og:description')
  metaOgDesc.setAttribute('content', window.description)
  document.head.appendChild(metaOgDesc)

  // Open Graph: 网页图片
  const metaOgImage = document.createElement('meta')
  metaOgImage.setAttribute('property', 'og:image')
  metaOgImage.setAttribute('content', LogoBig)
  document.head.appendChild(metaOgImage)

  // Twitter Card: 卡片类型
  const metaTwitterCard = document.createElement('meta')
  metaTwitterCard.setAttribute('name', 'twitter:card')
  metaTwitterCard.setAttribute('content', 'summary_large_image')
  document.head.appendChild(metaTwitterCard)

  // Twitter Card: 网页标题
  const metaTwitterTitle = document.createElement('meta')
  metaTwitterTitle.setAttribute('name', 'twitter:title')
  metaTwitterTitle.setAttribute('content', window.title)
  document.head.appendChild(metaTwitterTitle)

  // Twitter Card: 图片URL
  const metaTwitterImage = document.createElement('meta')
  metaTwitterImage.setAttribute('name', 'twitter:image')
  metaTwitterImage.setAttribute('content', LogoBig)
  document.head.appendChild(metaTwitterImage)

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

  window.wechat = isWeixinBrowser()

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
