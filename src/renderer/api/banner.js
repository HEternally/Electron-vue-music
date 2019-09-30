// banner 接口
import request from '@/utils/request.js';

export function banner () {
  return request.get('/banner');
};

// 电台banner
export function getDjBanner () {
  return request.get('/dj/banner');
};