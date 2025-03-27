// 判断是否为微信浏览器
export function isWeixinBrowser() {
  const ua = navigator.userAgent.toLowerCase()
  return /micromessenger/.test(ua)
}
