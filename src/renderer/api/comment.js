// 评论接口
import request from '@utils/request.js';

// 歌曲评论
export function musicCommont (params) {
  return request.get('/comment/music', {
    params,
  });
};

// 专辑评论
export function albumCommont (params) {
  return request.get('/comment/album', {
    params,
  });
};

// 歌单评论
export function playlistCommont (params) {
  return request.get('/comment/playlist', {
    params,
  });
};

// mv评论
export function mvCommont (params) {
  return request.get('/comment/mv', {
    params,
  });
};

// 电台节目评论
export function djCommont (params) {
  return request.get('/comment/dj', {
    params,
  });
};

// 视频评论
export function videoCommont (params) {
  return request.get('/comment/video', {
    params,
  });
};

// 热门评论
export function hotCommont (params) {
  return request.get('/comment/hot', {
    params,
  });
};

// 给评论点赞
export function likeCommont (params) {
  return request.get('/comment/like', {
    params,
  });
};

// 发送/删除评论
export function commont (params) {
  return request.get('/comment', {
    params,
  });
};
