// 专辑接口
import request from '@/utils/request.js';

// 获取专辑内容
export function getAlbum (id) {
  return request.get('/album', {
    params: {
      id,
    }
  });
};

// 专辑动态信息
export function getAlbumDetail (id) {
  return request.get('/album/detail/dynamic', {
    params: {
      id,
    }
  });
};

// 收藏/取消收藏专辑
export function albumSub ({ id,t = 1}) {
  return request.get('/album/sub', {
    params: {
      id,
      t,
    }
  });
};

// 获取已收藏专辑列表
export function getAlbumSublist ({ limit = 25, offset = 0}) {
  return request.get('/album/sublist', {
    params: {
      limit,
      offset,
    }
  });
};

// 新碟上架
export function getTopAlbum ({ limit = 50, offset = 0}) {
  return request.get('/top/album', {
    params: {
      limit,
      offset,
    }
  });
};

// 最新专辑
export function getNewAlbum () {
  return request.get('/album/newest');
};

// 我的数字专辑
export function getMyAlbum () {
  return request.get('/digitalAlbum/purchased');
};