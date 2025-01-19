<script setup lang="ts">
  import { placeholderLoading } from '@/utils/placeholder-loading'
  import 'normalize.css'

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
