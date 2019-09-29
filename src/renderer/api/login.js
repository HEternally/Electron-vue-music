// 登陆接口
import request from '@/utils/request.js';

// 手机登陆 phone/password
export function loginCellPhone (params) {
  return request.get('/login/cellphone', {
    params,
  });
};

// 邮箱登陆 email/password
export function loginEmail (params) {
  return request.get('/login', {
    params,
  });
};

// 刷新登陆
export function loginRefresh () {
  return request.get('/login/refresh');
};

// 退出登陆
export function logout () {
  return request.get('/logout');
};

// 获取登陆状态
export function loginStatus () {
  return request.get('/login/status');
};
