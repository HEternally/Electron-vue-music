// 歌曲接口
import request from '@/utils/request.js';

// 心动模式
export function getIntelligence (params) {
  return request.get('/playmode/intelligence/list', {
    params,
  });
};

// 获取歌曲url
export function getSongUrl (params) {
  return request.get('/song/url', {
    params,
  });
};

// 查询音乐是否可用
export function checkMusic (params) {
  return request.get('/check/music', {
    params,
  });
};

// 获取歌词
export function getLyric (params) {
  return request.get('/lyric', {
    params,
  });
};

// 新歌速递/最新音乐
export function getTopSong (type) {
  return request.get('/top/song?type=' + type);
};

// 获取歌曲详情
export function getSongDetail (params) {
  return request.get('/song/detail', {
    params,
  });
};

// 获取相似歌曲
export function getSongSimi (params) {
  return request.get('/simi/song', {
    params,
  });
};

// 获取最近听了五个听了这首歌的用户
export function getUserSimi (params) {
  return request.get('/simi/user', {
    params,
  });
};

// 获取每日推荐歌曲
export function getSongRecommend (params) {
  return request.get('/recommend/songs', {
    params,
  });
};

// 喜欢音乐
export function likeSong (params) {
  return request.get('/like', {
    params,
  });
};

// 喜欢的音乐列表
export function likeSongList (params) {
  return request.get('/likelist', {
    params,
  });
};
