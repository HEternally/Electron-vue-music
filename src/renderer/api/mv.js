// mv接口
import request from '@/utils/request.js';

// 可选参数 :
// area: 地区,可选值为全部,内地,港台,欧美,日本,韩国,不填则为全部 type: 类型,可选值为全部,官方版,原生,现场版,网易出品,不填则为全部
// order: 排序,可选值为上升最快,最热,最新,不填则为上升最快
// limit: 取出数量 , 默认为 30
// offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0

// 获取全部mv
export function getAllMv ({area = '全部', type = '全部', order = '上升最快', limit = 30, offset = 0}) {
  return request.get('/mv/all', {
    params: {
      area,
      type,
      order,
      limit,
      offset,
    }
  });
};

// mv排行
export function getTopMv ({limit = 30, offset = 0}) {
  return request.get('/top/mv', {
    params: {
      limit, offset
    }
  })
}

// 获取mv数据
export function getMVInfo (mvid) {
  return request.get('/mv/detail', {
    params: {
      mvid
    }
  })
}

// 获取mv地址
export function getMvUrl (id) {
  return request.get('/mv/url', {
    params: {
      id
    }
  })
}

// 最新mv
export function getNewMv ({ area = '全部', limit = 30}) {
  return request.get('/mv/first', {
    params: {
      area,
      limit,
    }
  });
};

// 网易出品mv
export function getRcmdMv ({ limit = 30, offset = 0}) {
  return request.get('/mv/exclusive/rcmd', {
    params: {
      limit,
      offset,
    }
  });
};

// 收藏/取消收藏mv
export function mvSub (params) {
  return request.get('/mv/sub', {
    params,
  });
};

// 收藏的mv列表
export function mvSublist (params) {
  return request.get('/mv/sublist', {
    params,
  });
};

// 资源点赞（mv、电台、视频）
export function likeResource (params) {
  return request.get('/resource/like', {
    params,
  });
};

// 获取相似mv
export function getMvSimi (params) {
  return request.get('/simi/mv', {
    params,
  });
};
