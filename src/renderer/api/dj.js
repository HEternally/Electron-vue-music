// 电台接口
import request from '@/utils/request.js';

// 获取用户电台
export function getDj (uid) {
  return request.get('/user/dj', {
    params: {
      uid,
    },
  });
};

// 用户电台（创建）
export function getDj (uid) {
  return request.get('/user/audio', {
    params: {
      uid,
    },
  });
};

// 热门电台
export function getHotDj ({ limit = 30, offset = 0}) {
  return request.get('/dj/hot', {
    params: {
      limit,
      offset,
    },
  });
};

// 需登录👇

// 电台 - 推荐
export function getRecommendDj () {
  return request.get('/dj/recommend');
};

// 电台 - 分类
export function getCatelistDj () {
  return request.get('/dj/catelist');
};

// 电台 - 分类推荐 type: 电台类型 , 数字
export function getRecommendDjType ({type = 1}) {
  return request.get('/dj/recommend/typet',{
    params: {
      type,
    },
  });
};

// 电台 - 订阅
export function subDj ({rid}) {
  return request.get('/dj/sub',{
    params: {
      rid,
    },
  });
};

// 电台的订阅列表
export function getDjSublist () {
  return request.get('/dj/sublist');
};

// 电台 - 付费精选
export function getDjPaygift ({ limit = 30, offset = 0}) {
  return request.get('/dj/paygift', {
    params: {
      limit,
      offset
    },
  });
};

// 电台 - 非热门类型
export function getDjCategory () {
  return request.get('/dj/category/excludehot');
};

// 电台 - 推荐类型
export function getDjCategoryRecommend () {
  return request.get('/dj/category/recommend');
};

// 电台 - 今日优选
export function getDjToday () {
  return request.get('/dj/today/perfered');
};

// 电台 - 详情
export function getDjDetail (rid) {
  return request.get('/dj/detail', {
    params: {
      rid,
    },
  });
};

// 电台 - 节目
export function getProgram ({rid, limit = 30, offset = 0, asc = false}) {
  return request.get('/dj/detail', {
    params: {
      rid,
      limit,
      offset,
      asc,
    },
  });
};

// 电台 - 节目详情
export function getProgramDetail (rid) {
  return request.get('/dj/detail', {
    params: {
      rid,
    },
  });
};
