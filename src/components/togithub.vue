<script setup lang="ts">

const toGithub = () => {
  window.open("https://github.com/SuperH-0630/")
}

</script>

<template>
  <div class="leftwin">
    <div class="box">
      <el-text class="box_text" @click="toGithub">
        前往 Github 主页
      </el-text>
    </div>
  </div>
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