/**
 * 检查对象是否为空
 * 为空则返回true
 * @param {Object} obj
 * @returns {boolean}
 */
export const isEmpty = (obj: Object) => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object

/**
 * 等待一段时间再执行
 * @param {number} milliseconds 等待毫秒
 * @returns {Promise<unknown>}
 */
export const wait = async (milliseconds: number) => new Promise((resolve) => setTimeout(resolve, milliseconds))

/**
 * 在元素后插入 HTML 字符串
 * @param {string} html
 * @param {HTMLDivElement} el
 */
export const insertHTMLAfter = (html: string, el: HTMLDivElement) => el.insertAdjacentHTML('afterend', html)

/**
 * 随机排列数组
 * @param arr
 */
export const shuffle = (arr: any[]) => arr.sort(() => 0.5 - Math.random())

/**
 * 计算数组的平均值
 * @param arr
 * @returns {number}
 */
export const average = (arr: number[]) => arr.reduce((a, b) => a + b) / arr.length

/**
 * 是否是合法手机号
 * @param phone
 * @returns {boolean}
 */
export const isMobile = (phone: string) => /^1[0-9]{10}$/.test(phone)

/**
 * 是否是合法邮箱
 * @param email
 * @returns {boolean}
 */
export const isEmail = (email: string) => /^.+@.+\..+$/i.test(email)

/**
 * 获取滚动的坐标
 * @param {Window} el
 * @returns {{x : any, y : any}}
 */
declare global {
  interface Window {
    description: string
    title: string
    scrollLeft?: number
    scrollTop?: number
  }
}
export const getScrollPosition = (el = window) => ({
  x: el.scrollX !== undefined ? el.scrollX : el.scrollLeft,
  y: el.scrollY !== undefined ? el.scrollY : el.scrollTop
})

/**
 * 滚动到顶部
 */
export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, c - c / 8)
  }
}

export function maskPhoneNumber(phoneNumber: string) {
  return phoneNumber.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
}

export function extractNumbersFromString(str): string {
  // 正则表达式匹配非数字字符后紧跟数字，然后是更多非数字字符
  const regex = /[^0-9]+(\d+)[^0-9]+/g
  let matches = ''
  let match = null as RegExpExecArray | null

  // 使用正则表达式的全局搜索来查找所有匹配项
  while ((match = regex.exec(str)) !== null) {
    // 提取数字部分并添加到结果数组
    matches += match[1].toString()
  }
  return matches
}
