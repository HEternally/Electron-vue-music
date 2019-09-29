// 搜索接口
import request from '@/utils/request.js';

// 搜索
export function search (params) {
  return request.get('/search', {
    params,
  });
};

// 默认搜索关键词
export function searchDefault (params) {
  return request.get('/search/default', {
    params,
  });
};

// 热搜列表(简陋版)
export function searchHot (params) {
  return request.get('/search/hot', {
    params,
  });
};

// 热搜列表(详细版)
export function searchHotDetail (params) {
  return request.get('/search/hot/detail', {
    params,
  });
};

// 搜索建议
export function searchSuggest (params) {
  return request.get('/search/suggest', {
    params,
  });
};

// 搜索多重匹配
export function searchMultimatch (params) {
  return request.get('/search/multimatch', {
    params,
  });
};
