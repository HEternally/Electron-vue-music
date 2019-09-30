// 用户信息接口
import request from '@/utils/request.js';

// 获取用户详情 uid
export function detail (uid) {
  return request.get('/user/detail', {
    params: {
      uid,
    }
  });
};

// 获取用户信息，歌单，收藏，mv，dj数量 (登陆后才可调用)
export function subCount () {
  return request.get('/user/subcount');
};


// gender: 性别 0:保密 1:男性 2:女性
// birthday: 出生日期,时间戳 unix timestamp
// nickname: 用户昵称
// province: 省份id
// city: 城市id
// signature：用户签名
// 更新用户信息
export function update (params) {
  return request.get('/user/update', {
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

// 获取私人FM
export function getFM (params) {
  return request.get('/personal_fm', {
    params,
  });
};

// 垃圾桶
export function trashFM (params) {
  return request.get('/fm_trash', {
    params,
  });
};

// 签到
export function dailySign (params) {
  return request.get('/daily_signin', {
    params,
  });
};

// 云盘
export function getCloud ({ limit = 200, offset = 0}) {
  return request.get('/user/cloud', {
    params: {
      limit,
      offset,
    }
  });
};

// 云盘数据详情
export function getCloudDetail ({ id }) {
  return request.get('/user/cloud/detail', {
    params: {
      id,
    }
  });
};

// 云盘歌曲删除
export function delCloud ({ id }) {
  return request.get('/user/cloud/del', {
    params: {
      id,
    }
  });
};

