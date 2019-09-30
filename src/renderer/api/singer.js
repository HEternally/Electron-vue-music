// 歌手接口
import request from '@/utils/request.js';

// 热门歌手
export function getTopSinger (params) {
  return request.get('/top/artists', {
    params,
  });
};

// 歌手分类列表
export function singetList (params) {
  return request.get('/artist/list', {
    params,
  });
};

// 收藏/取消收藏歌手
export function singerSub (params) {
  return request.get('/artist/sub', {
    params,
  });
};

// 收藏的歌手列表
export function sublist (params) {
  return request.get('/artist/sublist', {
    params,
  });
};

// 获取歌手单曲
export function getArtists (params) {
  return request.get('/artists', {
    params,
  });
};

// 获取歌手mv
export function getSingerMv (params) {
  return request.get('/artist/mv', {
    params,
  });
};

// 获取歌手专辑
export function getSingerAlbum (params) {
  return request.get('/artist/album', {
    params,
  });
};

// 获取歌手描述
export function getSingerDesc (params) {
  return request.get('/artist/desc', {
    params,
  });
};
