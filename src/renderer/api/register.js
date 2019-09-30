// 注册接口
import request from '@/utils/request.js';

// 注册/修改密码 captcha/phone/password
export function register (params) {
  return request.get('/register/cellphone', {
    params,
  });
};

// 检测手机号是否已注册 phone
export function checkPhone (params) {
  return request.get('/cellphone/existence/check', {
    params,
  });
};
