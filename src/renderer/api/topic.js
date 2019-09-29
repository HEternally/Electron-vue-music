// 话题接口
import request from '@/utils/request.js';

// 获取热门话题
export function topic (params) {
  return request.get('/hot/topic', {
    params,
  });
};
