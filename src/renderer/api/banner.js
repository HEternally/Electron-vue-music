// banner 接口
import request from '@/utils/request.js';

export function banner (params) {
  return request.get('/banner', {
    params,
  });
};
