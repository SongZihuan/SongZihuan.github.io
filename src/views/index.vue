<script setup lang="ts">
  import { ElDivider } from 'element-plus'
  import { get_build_time, get_build_time_zone } from '@/utils/build_time'
  import { formatDate } from '@/utils/time'
  import ToGithub from '@/components/togithub.vue'
  import { extractNumbersFromString } from '@/utils/str'
  import SparkMD5 from 'spark-md5'

  import WangAnLogo from '@/assets/images/wangan.png'
  import SongZihuan from '@/assets/images/songzihuan.png'
  import ORCiDLogo from '@/assets/images/ORCIDiD_icon16x16.png'
  import WechatGZHLogo from '@/assets/images/wxgzh.png'
  import ZhiHuLogo from '@/assets/images/zhihu.png'
  import GithubLogo from '@/assets/images/github.png'
  import HuanGogsLogo from '@/assets/images/huan-gogs.png'

  const build_time = ref(formatDate(get_build_time()))
  const build_time_zone = ref(get_build_time_zone())

  const ICP = computed(() => import.meta.env.VITE_ICP)
  const WANGAN = computed(() => import.meta.env.VITE_WANGAN)
  const WANGAA_NUM = computed(() => extractNumbersFromString(WANGAN.value))
  const WANGAN_URL = computed(() => `https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${WANGAA_NUM.value}`)

  const show = ref(false)
  const showStack = ref(false)
  const statusHorizontal = ref(true) // 水平
  const showGithubStats = ref(false)
  const showGithubLanguage = ref(false)

  // 定义一个响应式变量来存储当前时间
  const currentTime = ref('')
  const currentTimeZone = ref(Intl.DateTimeFormat().resolvedOptions().timeZone)
  const updateTime = () => {
    // 获取当前时间并格式化
    currentTime.value = formatDate(new Date())
  }

  const personalEmail = ref('contact@song-zh.com')
  const personalEmailBackup = ref('contact@hmail.song-zh.com')

  const emailHeader = computed(() => {
    const emailHash = SparkMD5.hash(personalEmail.value.trim().toLowerCase())
    return `https://www.gravatar.com/avatar/${emailHash}?s=200&d=identicon`
  })

  const imgLoadEmail = ref(0)
  const imgLoadBackup = ref(false)

  // 使用onMounted钩子在组件挂载后开始定时更新时间
  onMounted(() => {
    updateTime()
    const timer = setInterval(updateTime, 1000)

    onUnmounted(() => {
      clearInterval(timer)
    })
  })

  const WechatClick = () => {
    if (window.wechat) {
      window.location.href =
        'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzk0NDYzNTI1Ng==#wechat_redirect'
    }
  }

  function handleWindowResize() {
    show.value = window.innerWidth >= 240
    showStack.value = window.innerWidth >= 268
    statusHorizontal.value = window.innerWidth >= 788
    showGithubStats.value = window.innerWidth >= 478
    showGithubLanguage.value = window.innerWidth >= 322
  }
  window.addEventListener('resize', handleWindowResize)
  handleWindowResize()
</script>

<template>
  <div v-show="false">
    <el-image class="szh-img" :src="emailHeader" @load="imgLoadEmail = 1" @error="imgLoadEmail = 2"></el-image>
    <el-image class="szh-img" :src="SongZihuan" @load="imgLoadBackup = true"></el-image>
  </div>
  <div v-if="show" class="outside_box">
    <div class="inner_box">
      <div class="title_a">
        Hello，我是
        <el-tooltip
          v-if="imgLoadEmail == 1 || (imgLoadEmail == 2 && imgLoadBackup)"
          effect="dark"
          placement="bottom"
          :hide-after="3000"
        >
          宋子桓🌈
          <template #content>
            <div style="display: flex; justify-content: center">
              <div>
                <div style="display: flex; justify-content: center; width: 100%; margin-top: 10px; text-align: center">
                  <div class="szh-img-box">
                    <el-image class="szh-img" :src="imgLoadEmail == 1 ? emailHeader : SongZihuan"></el-image>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </el-tooltip>
        <span v-else> 宋子桓🌈 </span>
      </div>

      <el-divider direction="horizontal" class="divider_horizontal"></el-divider>

      <div>
        <p class="text more_line_text">
          大家好，
          <span class="no-wrap">我是宋子桓</span>
          ，
          <span class="no-wrap">字桓枢</span>
          ，
          <span class="no-wrap">号云楩散人</span>
          ！
          <br />

          <span class="no-warp">
            在英语语境下，一般采用
            <el-tooltip effect="dark" placement="bottom">
              <span class="no-wrap"> Song Zihuan </span>
              <template #content>
                <el-text style="color: white"> 为了强调个性和地域特征，我的英文名一般将姓氏（Song）放在首位。 </el-text>
              </template>
            </el-tooltip>
            作为我的英文名，在特殊场合下可能采用
            <el-tooltip effect="dark" placement="bottom">
              <span class="no-wrap"> Zihuan Song </span>
              <template #content>
                <el-text style="color: white"> 正常英文语境下，一般将姓氏（Song）放在后面。 </el-text>
              </template>
            </el-tooltip>
            。
          </span>

          <br />
          <span class="bold_span">我是一名出生于2004年6月的码农。</span>
          <br />

          您可以称呼我为
          <span class="no-wrap"> 子桓 </span>
          或
          <span class="no-wrap"> 小桓 </span>
          ；亦或是我的英文名
          <span class="no-wrap"> Huan </span>
          或者
          <el-tooltip effect="dark" placement="bottom">
            <span class="no-wrap"> Cr. Huan </span>
            <template #content>
              <el-text style="color: white">
                Cr.和Dr.类似，都是一种缩写。在此，Cr.是Coder的缩写，不过这不是一个常见且标准的缩写。
              </el-text>
            </template>
          </el-tooltip>
          。
          <br />

          曾就职于广州桓创信息科技有限公司，时任技术总监和总经理。我个人在习惯上比较喜欢他人称呼我为
          <span class="no-wrap"> 桓工 </span>
          或
          <span class="no-wrap"> 换总监 </span>
          亦或是
          <span class="no-wrap"> 桓经理 </span>
          <br />

          我主要活跃于<span class="bold_span">中国广州地区</span>，但我通常以互联网身份参与活动。
          <br />

          我立志成为一名优秀的全栈工程师。 我的开发梦想是完成自己的操作系统（OS）、编程语言（Programming
          Language）以及维系系统正常运行的组件工具（Tool）。
          <br />

          我的个人标志性域名是<span class="bold_span">song-zh.com</span>，请认准该域名，谨防冒充等行为。
          <br />

          感谢所有人对我的支持，谢谢。
        </p>
      </div>
      <el-divider direction="horizontal" class="divider_horizontal_small"></el-divider>

      <div>
        <ul class="text more_line_text">
          <li class="more_line_ul"><a href="https://song-zh.com" target="_blank">💻 个人网站</a></li>

          <li class="more_line_ul">
            <a
              href="https://orcid.org/0009-0008-5167-1636"
              target="orcid.widget"
              rel="me noopener noreferrer"
              style="vertical-align: bottom"
            >
              <img
                :src="ORCiDLogo"
                style="object-fit: contain; width: 1em; margin-inline-start: 0.5em"
                alt="ORCID iD icon"
              />
              https://orcid.org/0009-0008-5167-1636
            </a>
          </li>

          <li class="more_line_ul">
            📧
            <el-tooltip effect="dark" placement="bottom">
              <a :href="`mailto://${personalEmail}`" target="_blank">{{ personalEmail }}</a> 联系我。
              <template #content>
                <el-text style="color: white">
                  或者备用邮箱：
                  <a style="color: white" :href="`mailto://${personalEmailBackup}`" target="_blank">
                    📧 {{ personalEmailBackup }}
                  </a>
                </el-text>
              </template>
            </el-tooltip>
          </li>

          <li class="more_line_ul">
            <el-tooltip effect="dark" placement="bottom">
              <router-link to="/message">📩 电子信箱</router-link> 联系我。
              <template #content>
                <el-text style="color: white"> 采用网页发信的形式，而无需准备电子邮件系统。 </el-text>
              </template>
            </el-tooltip>
          </li>

          <li class="more_line_ul">
            <a href="https://www.zhihu.com/people/super-huan0630" target="_blank">
              <div class="li_box_outside">
                <div class="zhihu_img_box">
                  <img style="object-fit: contain; width: calc(min(5vw, 50px))" alt="知乎Logo" :src="ZhiHuLogo" />
                </div>
                <div class="zhihu_text_box">宋子桓</div>
              </div>
            </a>
          </li>

          <li class="more_line_ul">
            <a href="https://github.com/SongZihuan" target="_blank">
              <div class="li_box_outside">
                <div class="github_img_box">
                  <img style="object-fit: contain; width: calc(min(3.5vw, 35px))" alt="GithubLogo" :src="GithubLogo" />
                </div>
                <div class="github_text_box">宋子桓（SongZiuan）</div>
              </div>
            </a>
          </li>

          <li class="more_line_ul">
            <a href="https://code-git.song-zh.com" target="_blank">
              <div class="li_box_outside">
                <div class="huan_gogs_img_box">
                  <img
                    style="object-fit: contain; width: calc(min(5vw, 50px))"
                    alt="HuanGogsLogo"
                    :src="HuanGogsLogo"
                  />
                </div>
                <div class="huan_gogs_text_box">宋子桓-个人公开Git仓库</div>
              </div>
            </a>
          </li>

          <li class="more_line_ul">
            <div class="li_box_outside">
              <div class="wx_img_box">
                <el-image fit="contain" :src="WechatGZHLogo" @click="WechatClick"></el-image>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <el-divider direction="horizontal" class="divider_horizontal"></el-divider>

      <div>
        <ul class="text more_line_text">
          <li class="more_line_ul">✈️ 我是个自由职业者。</li>

          <li class="more_line_ul">🤖 我喜欢开发各种代码，例如互联网项目。</li>

          <li class="more_line_ul">❓ 您可以和我讨论任何关于代码的问题，我很乐意为您提供帮助。</li>
        </ul>
      </div>

      <el-divider direction="horizontal" class="divider_horizontal"></el-divider>

      <div class="title_b">许可（License）</div>
      <div class="license_box">
        <p class="text more_line_text">
          本人的项目在默认情况下使用
          <a href="https://mit-license.song-zh.com" target="_blank"> MIT LICENSE </a> 许可证发布。
          <br />
          MIT LICENSE 官网：<a href="https://mit-license.org/" target="_blank">点击前往</a>
          <br />
          MIT LICENSE 官网（代理）： <a href="https://mit-license-org.song-zh.com/" target="_blank">点击前往</a>
        </p>
      </div>

      <div v-if="showStack" class="title_b">我的技术栈</div>
      <div v-if="showStack" class="skill_list">
        <div class="skill_box">
          <div class="title_c">前端</div>
          <div>
            <a href="https://getbootstrap.com/docs/3.4/javascript/" target="_blank"
              ><img
                style="margin: 10px"
                src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg"
                alt="Bootstrap"
                height="50"
            /></a>
            <a href="https://www.w3schools.com/css/" target="_blank"
              ><img
                style="margin: 10px"
                src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg"
                alt="CSS3"
                height="50"
            /></a>
            <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"
              ><img
                style="margin: 10px"
                src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg"
                alt="HTML5"
                height="50"
            /></a>
            <a href="https://www.javascript.com/" target="_blank"
              ><img
                style="margin: 10px"
                src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg"
                alt="JavaScript"
                height="50"
            /></a>
            <a href="https://www.typescriptlang.org/" target="_blank"
              ><img
                style="margin: 10px"
                src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg"
                alt="TypeScript"
                height="50"
            /></a>
            <a href="https://vuejs.org/" target="_blank"
              ><img
                style="margin: 10px"
                src="https://profilinator.rishav.dev/skills-assets/vuejs-original-wordmark.svg"
                alt="Vue.js"
                height="50"
            /></a>
            <a href="https://nextjs.org/" target="_blank"
              ><img
                style="margin: 10px"
                src="https://profilinator.rishav.dev/skills-assets/nextjs.png"
                alt="NextJS"
                height="50"
            /></a>
          </div>
        </div>

        <div class="skill_box">
          <div class="title_c">后端</div>
          <div>
            <a href="https://www.cplusplus.com/" target="_blank"
              ><img
                style="margin: 10px"
                src="https://profilinator.rishav.dev/skills-assets/cplusplus-original.svg"
                alt="C++"
                height="50"
            /></a>
            <a href="https://www.python.org/" target="_blank"
              ><img
                style="margin: 10px"
                src="https://profilinator.rishav.dev/skills-assets/python-original.svg"
                alt="Python"
                height="50"
            /></a>
            <a href="https://go.dev/" target="_blank"
              ><img
                style="margin: 10px"
                src="https://profilinator.rishav.dev/skills-assets/go-original.svg"
                alt="Go"
                height="50"
            /></a>
            <a href="https://www.cprogramming.com/" target="_blank"
              ><img
                style="margin: 10px"
                src="https://profilinator.rishav.dev/skills-assets/c-original.svg"
                alt="C"
                height="50"
            /></a>
          </div>
        </div>

        <div class="skill_box">
          <div class="title_c">运维</div>
          <div>
            <a href="https://kubernetes.io/" target="_blank"
              ><img
                style="margin: 10px"
                src="https://profilinator.rishav.dev/skills-assets/kubernetes-icon.svg"
                alt="Kubernetes"
                height="50"
            /></a>
            <a href="https://www.linux.org/" target="_blank"
              ><img
                style="margin: 10px"
                src="https://profilinator.rishav.dev/skills-assets/linux-original.svg"
                alt="Linux"
                height="50"
            /></a>
            <a href="https://github.com/" target="_blank"
              ><img
                style="margin: 10px"
                src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg"
                alt="Git"
                height="50"
            /></a>
            <a href="https://www.gnu.org/software/bash/" target="_blank"
              ><img
                style="margin: 10px"
                src="https://profilinator.rishav.dev/skills-assets/gnu_bash-icon.svg"
                alt="Bash"
                height="50"
            /></a>
            <a href="https://www.docker.com/" target="_blank"
              ><img
                style="margin: 10px"
                src="https://profilinator.rishav.dev/skills-assets/docker-original-wordmark.svg"
                alt="Docker"
                height="50"
            /></a>
            <a href="https://redis.io/" target="_blank"
              ><img
                style="margin: 10px"
                src="https://profilinator.rishav.dev/skills-assets/redis-original-wordmark.svg"
                alt="Redis"
                height="50"
            /></a>
            <a href="https://www.mysql.com/" target="_blank"
              ><img
                style="margin: 10px"
                src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg"
                alt="MySQL"
                height="50"
            /></a>
            <a href="https://www.mongodb.com/" target="_blank"
              ><img
                style="margin: 10px"
                src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg"
                alt="MongoDB"
                height="50"
            /></a>
            <a href="https://www.nginx.com/" target="_blank"
              ><img
                style="margin: 10px"
                src="https://profilinator.rishav.dev/skills-assets/nginx-original.svg"
                alt="Nginx"
                height="50"
            /></a>
            <a href="https://mariadb.org/" target="_blank"
              ><img
                style="margin: 10px"
                src="https://profilinator.rishav.dev/skills-assets/mariadb.png"
                alt="Maria DB"
                height="50"
            /></a>
          </div>
        </div>
      </div>

      <div class="title_b">我的Github动态</div>
      <div v-if="statusHorizontal" class="stats_row">
        <div class="stat">
          <img
            v-if="showGithubStats"
            src="https://github-readme-stats.vercel.app/api?username=SongZihuan&show_icons=true&count_private=true&hide_border=true"
            alt="Github动态"
          />
        </div>
        <div class="stat">
          <img
            v-if="showGithubLanguage"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=SongZihuan&hide_border=true&layout=compact"
            alt="Github动态"
          />
        </div>
      </div>
      <div v-else class="stats_column">
        <div class="stat">
          <img
            v-if="showGithubStats"
            src="https://github-readme-stats.vercel.app/api?username=SongZihuan&show_icons=true&count_private=true&hide_border=true"
            alt="Github动态"
          />
        </div>
        <div class="stat">
          <img
            v-if="showGithubLanguage"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=SongZihuan&hide_border=true&layout=compact"
            alt="Github动态"
          />
        </div>
      </div>

      <div class="title_b">赞助者和贡献者</div>
      <div>
        <p class="text more_line_text">
          我感谢每一位赞助者和贡献者，有关他们的列表可以在此查询：
          <a href="https://cas.song-zh.com" target="_blank"> 点击前往查询 </a>
        </p>
      </div>

      <div class="title_b_little">如何赞助？</div>
      <div>
        <p class="text more_line_text">
          我在"爱发电"平台注册账号，并进行创作者申请。若您喜欢我的项目，或者想进一步了解关于我的开源资讯，可以通过对我的赞助进行了解。
          <br />
          点击链接前往我的
          <a href="https://afdian.com/a/SongZihuan" target="_blank">“爱发电”</a>
          。
        </p>

        <p class="text more_line_text">
          同时，我也在“知识星球”平台注册了账号，并创建了星球。您也可以
          <br />
          点击链接前往我的
          <a href="https://wx.zsxq.com/group/51111844184424" target="_blank">“知识星球”</a>。
          <br />
          注意：近期星球可能有优惠券，您可以前往我的<a href="https://cas.song-zh.com/zsxq.html" target="_blank"
            >赞助者和贡献者平台</a
          >查看。
        </p>

        <p class="text more_line_text">
          最后，您可以选择微信或支付宝对我进行赞助，赞助的相关奖励政策可以可以前往我的<a
            href="https://cas.song-zh.com/sponsors-now.html"
            target="_blank"
            >赞助者和贡献者平台</a
          >
          查看：
        </p>
      </div>

      <el-divider direction="horizontal" class="divider_horizontal"></el-divider>

      <div class="import_title_b">鸣谢</div>
      <div>
        <p class="text more_line_text">
          感谢<a href="https://profilinator.rishav.dev/" target="_blank">profilinator.rishav.dev</a
          >在我编辑profile时的支持。
          <br />

          感谢<a href="https://github.com/" target="_blank">Github</a
          >等代码托管平台，以及众多的开源项目。他们的出现让我的工作变得轻松和简单。
          <br />

          <span class="bold_span"
            ><span class="import_span">特别鸣谢</span>所有对我和我的团队的项目付出贡献的贡献人和贡献团体，<span
              class="import_span"
              >本人由衷的感谢</span
            >。</span
          >
        </p>
      </div>

      <el-divider direction="horizontal" class="divider_horizontal"></el-divider>

      <div class="contact_box">
        <a href="https://github.com/SongZihuan" target="_blank">
          <img
            src="https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white"
            alt="github"
            style="margin-bottom: 5px"
          />
        </a>
      </div>

      <div class="bottom">
        <p class="text more_line_text">
          <span>
            友情链接：
            <a href="https://mit-license.song-zh.com" target="_blank"> MIT LICENSE 介绍 </a>
            ，
            <a href="https://cas.song-zh.com" target="_blank"> 贡献者与赞助者平台 </a>
            ，
            <a href="https://code-git.song-zh.com" target="_blank"> 代码仓库托管 </a>
          </span>
          <br />
          <span> 本页面最后更新于：{{ build_time }} {{ build_time_zone }}。 </span>
          <br />
          <span> 当前时间：{{ currentTime }} {{ currentTimeZone }}。 </span>
          <br v-if="ICP" />
          <span v-if="ICP"
            ><a href="https://beian.miit.gov.cn/" target="_blank"> {{ ICP }} </a></span
          >
          <br v-if="WANGAN && WANGAN_URL" />
          <span v-if="WANGAN && WANGAN_URL">
            <img
              alt="网络安全图标"
              style="vertical-align: middle; max-width: 20px; max-height: 20px"
              :src="WangAnLogo"
            />
            <a :href="WANGAN_URL" target="_blank"> {{ WANGAN }} </a>
          </span>
        </p>
      </div>
    </div>
    <ToGithub></ToGithub>
  </div>
  <div v-else></div>
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

  .import_title_b {
    width: 100%;
    font-size: 2.1rem;
    color: red;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    text-decoration: underline;
  }

  .import_title_b:hover {
    font-size: 3rem;
  }

  .title_b {
    width: 100%;
    font-size: 2.1rem;
    color: black;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .title_b_little {
    width: 100%;
    font-size: 1.8rem;
    color: black;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .title_c {
    width: 100%;
    font-size: 1.8rem;
    color: black;
    text-align: left;
    margin-top: 20px;
  }

  .divider_horizontal {
    border-width: 1.5px;
  }

  .divider_horizontal_small {
    border-width: 1px;
  }

  .bold_span {
    font-weight: bold;
  }

  .bold_span:hover {
    font-size: 1.05em;
    text-decoration: underline;
    color: navy;
  }

  .import_span {
    color: red;
  }

  .text {
    font-size: 1.3rem;
  }

  .more_line_text {
    line-height: 2em;
  }

  .more_line_ul {
    margin-bottom: 1.2vh;
  }

  .skill_list {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .skill_box {
    width: 33.33%;
  }

  .contact_box,
  .total {
    text-align: center;
  }

  .stats_row {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }

  .stats_column {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .stat {
    margin: 5px;
  }

  .license_box {
    display: flex;
    justify-content: center;
  }

  .bottom {
    margin-top: 5px;
    margin-bottom: 15px;
    text-align: center;
  }

  a,
  router-link {
    color: black;
    text-decoration: none;
    cursor: pointer;
    font-size: 1em;
    font-weight: bold;
  }

  a:active,
  router-link:active {
    color: #72767b;
  }

  a:hover,
  router-link:hover {
    color: #f56c6c;
  }

  a:hover,
  a:active,
  router-link:hover,
  router-link:active {
    font-size: 1.05em;
    font-weight: bold;
    text-decoration: underline dotted;
  }

  .no-wrap {
    white-space: nowrap;
  }

  .szh-img-box {
    max-width: calc(min(90vw, 170px));
  }

  .wx_img_box {
    max-width: 60vh;
  }

  .li_box_outside {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .zhihu_img_box {
    max-width: calc(min(5vw, 50px));
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .zhihu_text_box {
    margin-left: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .github_img_box {
    max-width: calc(min(5vw, 50px));
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .github_text_box {
    margin-left: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .huan_gogs_img_box {
    max-width: calc(min(5vw, 50px));
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .huan_gogs_text_box {
    margin-left: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
