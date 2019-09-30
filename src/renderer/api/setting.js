// 个人设置接口
import request from '@/utils/request.js';

// 初始化昵称(用于刚注册的账号) nickname
export function initNickname (params) {
  return request.get('/activate/init/profile', {
    params,
  });
};

// 更换绑定手机 
export function changCellphone (params) {
  return request.get('/rebind', {
    params,
  });
};

// 设置
export function getSetting () {
  return request.get('/setting');
};
