// 歌单接口
import request from '@/utils/request.js';

// 获取用户歌单
export function getPlayList (params) {
  return request.get('/user/playlist', {
    params,
  });
};

// 新建歌单
export function createPlaylist (params) {
  return request.get('/playlust/create', {
    params,
  });
};

// 删除歌单
export function delPlaylist (params) {
  return request.get('/playlist/delete', {
    params,
  });
};

// 歌单分类
export function getCatlist (params) {
  return request.get('/playlist/catlist', {
    params,
  });
};

// 热门歌单分类
export function getHotCatlist (params) {
  return request.get('/playlist/hot', {
    params,
  });
};

// 歌单(网友精选碟)
export function getToplist (params) {
  return request.get('/top/playlist', {
    params,
  });
};

// 获取精品歌单
export function getHighlist (params) {
  return request.get('/top/playlist/highquality', {
    params,
  });
};

// 更新歌单
export function updatePlayList (params) {
  return request.get('/playlist/update', {
    params,
  });
};

// 更新歌单描述
export function updatePlayListDesc (params) {
  return request.get('/playlist/desc/update', {
    params,
  });
};

// 更新歌单名
export function updatePlayListName (params) {
  return request.get('/playlist/name/update', {
    params,
  });
};

// 更新歌单标签
export function updatePlayListTags (params) {
  return request.get('/playlist/tags/update', {
    params,
  });
};

// 相关歌单推荐
export function getRelatedPlaylist (params) {
  return request.get('/related/playlist', {
    params,
  });
};

// 获取歌单详情
export function getPlaylistDetail (params) {
  return request.get('/playlist/detail', {
    params,
  });
};

// 收藏/取消收藏歌单
export function playlistSub (params) {
  return request.get('/playlist/subscribe', {
    params,
  });
};

// 获取歌单收藏者
export function playlistSubscribers (params) {
  return request.get('/playlist/subscribers', {
    params,
  });
};

// 对歌单添加或删除歌曲
export function playlistTracks (params) {
  return request.get('/playlist/tracks', {
    params,
  });
};

// 获取相似歌单
export function playlistSimi (params) {
  return request.get('/simi/playlist', {
    params,
  });
};

// 获取每日推荐歌单
export function playlistRecommend (params) {
  return request.get('/recommend/resource', {
    params,
  });
};
