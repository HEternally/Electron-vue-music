// 用户信息接口
import request from '@/utils/request.js';

// 获取用户详情 uid
export function detail (params) {
  return request.get('/user/detail', {
    params,
  });
};

// 获取用户信息，歌单，收藏，mv，dj数量 (登陆后才可调用)
export function subCount (params) {
  return request.get('/user/subcount', {
    params,
  });
};

// 更新用户信息
export function update (params) {
  return request.get('/user/update', {
    params,
  });
};

// 获取用户电台
export function getDj (params) {
  return request.get('/user/dj', {
    params,
  });
};

// 获取用户播放记录
export function getRecord (params) {
  return request.get('/user/record', {
    params,
  });
};

// 获取用户关注列表
export function getFollows (params) {
  return request.get('/user/follows', {
    params,
  });
};

// 获取用户粉丝列表
export function getFolloweds (params) {
  return request.get('/user/followeds', {
    params,
  });
};

// 关注/取消关注用户
export function follow (params) {
  return request.get('/follow', {
    params,
  });
};

