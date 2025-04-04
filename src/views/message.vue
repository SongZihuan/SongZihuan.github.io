<script setup lang="ts">
  import { ElDivider, ElMessage } from 'element-plus'
  import { sendMsgToMail } from '@/api/message/sendmsg'
  import { isEmail } from '@/utils/str'

  const router = useRouter()

  const loading = ref(false)
  const show = ref(true)
  const form = ref({
    name: '',
    email: '',
    message: ''
  })

  const checkMessageShort = computed(() => form.value.message.length >= 1)
  const checkMessageLong = computed(() => form.value.message.length <= 50000)
  const checkName = computed(() => form.value.name.length <= 25)
  const checkEmail = computed(
    () => form.value.email == '' || (form.value.email.length < 40 && isEmail(form.value.email))
  )
  const checkAll = computed(
    () => checkMessageShort.value && checkMessageLong.value && checkName.value && checkEmail.value
  )

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
    sendMsgToMail(form.value.name, form.value.email, form.value.message)
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

            <el-form-item label="你的邮箱（Your email）">
              <el-input v-model="form.email" :maxlength="40" clearable show-word-limit />
            </el-form-item>

            <el-form-item label="你的留言（Your message）">
              <el-input v-model="form.message" type="textarea" :minlength="1" :rows="10" clearable show-word-limit />
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
                <el-alert title="名字不能超过25位，选填！" :closable="false" type="warning" center show-icon>
                </el-alert>
              </div>
              <div v-if="!checkEmail" class="tip_box" style="display: flex; justify-content: center">
                <el-alert
                  title="请输入正确的邮箱，不得超过40个字符，选填！"
                  :closable="false"
                  type="warning"
                  center
                  show-icon
                >
                </el-alert>
              </div>
              <div v-if="!checkMessageLong" class="tip_box" style="display: flex; justify-content: center">
                <el-alert
                  title="消息的长度太长，可采用邮件形式发送！"
                  :closable="false"
                  type="warning"
                  center
                  show-icon
                >
                </el-alert>
              </div>
              <div v-if="!checkMessageShort" class="tip_box" style="display: flex; justify-content: center">
                <el-alert title="消息不能为空！" :closable="false" type="warning" center show-icon> </el-alert>
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

  .tip_box {
    margin-bottom: 5px;
  }
</style>
