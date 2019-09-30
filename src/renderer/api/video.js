// 视频接口
import request from '@/utils/request.js';

// 收藏视频
export function videoSub (params) {
  return request.get('/video/sub', {
    params,
  });
};

// 获取视频标签列表
export function getvideoGroupList () {
  return request.get('/video/group/list');
};

// 获取视频标签下的视频
export function getvideoGroup (id) {
  return request.get('/video/group',{
    params: {
      id,
    }
  });
};

// 获取相关视频
export function getAllVideo (id) {
  return request.get('/related/allvideo',{
    params: {
      id,
    }
  });
};

// 获取视频详情
export function getVideoDetail (id) {
  return request.get('/video/detail',{
    params: {
      id,
    }
  });
};

// 获取视频播放地址
export function getVideoUrl (id) {
  return request.get('/video/url',{
    params: {
      id,
    }
  });
};
