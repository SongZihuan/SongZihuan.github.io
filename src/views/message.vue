<script setup lang="ts">
  import { ElDivider, ElMessage } from 'element-plus'
  import { sendMsgToMail } from '@/api/message/sendmsg'

  const router = useRouter()

  const loading = ref(false)
  const show = ref(true)
  const form = ref({
    name: '',
    message: ''
  })

  const checkMessage = computed(() => form.value.message.length >= 1 && form.value.message.length <= 150)
  const checkName = computed(() => form.value.name.length <= 25)
  const checkAll = computed(() => checkMessage.value && checkName.value)

  function handleWindowResize() {
    show.value = window.innerWidth >= 240
  }
  window.addEventListener('resize', handleWindowResize)
  handleWindowResize()

  const reset = () => {
    form.value.message = ''
  }

  const backToHome = () => {
    router.push('/')
  }

  const sendMsg = () => {
    if (!checkAll.value) {
      return
    }

    loading.value = true
    sendMsgToMail(form.value.name, form.value.message)
      .then((response) => {
        const data = response.data
        if (data.success) {
          reset()
          ElMessage({
            message: data.message || '留言成功',
            type: 'success'
          })
        } else {
          ElMessage({
            message: data.message || '留言失败',
            type: 'error'
          })
        }
      })
      .finally(() => (loading.value = false))
  }
</script>

<template>
  <div v-if="show" class="outside_box">
    <div class="inner_box">
      <div class="title_a">宋子桓-电子信箱📧</div>

      <el-divider direction="horizontal" class="divider_horizontal"></el-divider>

      <div v-loading="loading" class="card_outside">
        <el-card class="card_box">
          <el-form :model="form" label-width="auto">
            <el-form-item label="你的名字（Your name）">
              <el-input v-model="form.name" :maxlength="25" clearable show-word-limit />
            </el-form-item>

            <el-form-item label="你的留言（Your message）">
              <el-input
                v-model="form.message"
                type="textarea"
                :minlength="1"
                :maxlength="150"
                :rows="10"
                clearable
                show-word-limit
              />
            </el-form-item>
          </el-form>
          <div class="center_btn_box">
            <el-button-group>
              <el-button size="large" type="primary" :disabled="loading" @click="backToHome"> 返回主页 </el-button>
              <el-button size="large" type="success" :disabled="!checkAll || loading" @click="sendMsg">
                提交
              </el-button>
            </el-button-group>
          </div>
          <div class="center_tips_box">
            <div class="tips_box">
              <div v-if="!checkName" class="tip_box" style="display: flex; justify-content: center">
                <el-alert title="名字不能超过25位！" :closable="false" type="warning" center show-icon> </el-alert>
              </div>
              <div v-if="!checkMessage" class="tip_box" style="display: flex; justify-content: center">
                <el-alert title="消息的长度要在1-150个字符！" :closable="false" type="warning" center show-icon>
                </el-alert>
              </div>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .outside_box {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .inner_box {
    width: 80%;
  }

  .title_a {
    width: 100%;
    font-size: 2.5rem;
    color: black;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .card_outside {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .card_box {
    width: calc(min(75%, 800px));
  }

  .center_btn_box,
  .center_tips_box {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .tips_box {
    width: 75%;
    margin-top: 5px;
  }
</style>
