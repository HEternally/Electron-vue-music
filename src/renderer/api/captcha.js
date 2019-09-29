// 验证码接口
import request from '@/utils/request.js';

// 发送验证码 phone
export function sent (params) {
  return request.get('/captcha/sent', {
    params,
  });
};

// 验证验证码 phone/captcha
export function verify (params) {
  return request.get('/captcha/verify', {
    params,
  });
};