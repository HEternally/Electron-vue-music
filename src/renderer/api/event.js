// 动态接口
import request from '@/utils/request.js';

// 获取用户动态
export function getUserEvent (params) {
  return request.get('/user/event', {
    params,
  });
};

// 转发用户动态
export function forwardEvent (params) {
  return request.get('/event/forward', {
    params,
  });
};

// 删除用户动态
export function delEvent (params) {
  return request.get('/event/del', {
    params,
  });
};

// 分享歌曲、歌单、mv、电台、电台节目到动态
export function share (params) {
  return request.get('/share/resource', {
    params,
  });
};

// 获取动态评论
export function commentEvent (params) {
  return request.get('/comment/event', {
    params,
  });
};

// 获取动态信息
export function getEvent (params) {
  return request.get('/event', {
    params,
  });
};
