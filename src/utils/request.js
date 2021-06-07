// /src/utils/request.ts
import axios from 'axios'

const request = axios.create({
  // 配置选项
  // baseURL
  baseURL: 'https://conduit.productionready.io/'
  // timeout
})

export default request
