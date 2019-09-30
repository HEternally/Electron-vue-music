// 推荐接口
import request from '@/utils/request.js';

// 推荐mv
export function getPersonalizedMv () {
  return request.get('/personalized/mv');
};

// 获取推荐歌单
export function getPersonalizedPlaylist () {
  return request.get('/personalized');
};

// 获取推荐新音乐
export function getPersonalizedSong () {
  return request.get('/personalized/newsong');
};

// 推荐电台
export function getPersonalizedDj () {
  return request.get('/personalized/djprogram',);
};

// 推荐节目
export function getPersonalizedProgram () {
  return request.get('/program/recommend',);
};

// 独家放送
export function getPersonalizedPrivatecontent () {
  return request.get('/personalized/privatecontent',);
};