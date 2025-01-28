import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios'
import { ElMessageBox } from 'element-plus'

export const config = {
  baseURL: import.meta.env.VITE_MSG_API_BASE_URL || '/message'
}

const msgservice: AxiosInstance = axios.create(config)

msgservice.interceptors.request.use(
  (config): any => {
    const headers = {
      ...config.headers,
      'Content-Type': 'application/json;charset=utf-8',
      Accept: 'application/json;charset=utf-8'
    }

    return {
      ...config,
      headers: headers
    }
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

msgservice.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      return Promise.resolve(response)
    } else if (response.status <= 599 && response.status >= 500) {
      ElMessageBox.alert('服务器出错啦', '提示', {
        confirmButtonText: '好的',
        callback: () => {}
      })
    } else {
      ElMessageBox.alert('网站暂时无法处理你的请求', '提示', {
        confirmButtonText: '好的',
        callback: () => {}
      })
    }

    return Promise.reject(response)
  },
  (error: AxiosError) => {
    ElMessageBox.alert('网站暂时无法处理你的请求', '提示', {
      confirmButtonText: '好的',
      callback: () => {}
    })
    return Promise.reject(error)
  }
)

export type Result = Promise<ResultData> | any
export type ResultData = AxiosResponse<result> | any

export interface result {
  message: string
  code: number
  success: boolean
}

export default msgservice
