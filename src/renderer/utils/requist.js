/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
import axios from 'axios';
import store from '@/store';

const baseURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000/api'
  : 'http://39.105.232.6:3000';

// 创建axios实例
const instance = axios.create({
  baseURL,
  timeout: 1000,
});

// 添加请求拦截器
instance.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  return config + store;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(response => {
  return response;
}, error => {
  return Promise.reject(error);
});

export default instance;
