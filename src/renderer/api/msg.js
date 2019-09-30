// 私信接口
import request from '@/utils/request.js';

// 通知 - 私信
export function getPrivate ({ limit = 30, offset = 0}) {
  return request.get('/msg/private', {
    params: {
      limit,
      offset,
    },
  });
};

// 发送私信
export function sendText (params) {
  return request.get('/send/text', {
    params,
  });
};

// 私信内容
export function getMsgHistory ({ uid, limit = 30, offset = 0}) {
  return request.get('/msg/private/history', {
    params: {
      uid,
      limit,
      offset,
    },
  });
};

// 发送私信(带歌单) 
export function sendPlaylist (params) {
  return request.get('/send/playlist', {
    params,
  });
};

// 通知 - 评论
export function getMsgComments ({uid, limit = 30, before}) {
  return request.get('/msg/comments', {
    params: {
      uid,
      limit,
      before,
    },
  });
};

// 通知 - @我
export function getMsgForwards ({ limit = 30, offset = 0}) {
  return request.get('/msg/forwards', {
    params: {
      limit,
      offset,
    },
  });
};

// 通知 - 通知
export function getMsgNotices ({ limit = 30, offset = 0}) {
  return request.get('/msg/notices', {
    params: {
      limit,
      offset,
    },
  });
};
