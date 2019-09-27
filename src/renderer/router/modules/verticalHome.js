const verticalHome = [
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
    meta: {
      title: '发现音乐/个性推荐',
    },
  },
  {
    path: '/songList',
    name: 'songList',
    component: () => import(/* webpackChunkName: "songList" */ '@/views/home/components/songList.vue'),
    meta: {
      title: '发现音乐/歌单',
    },
  },
  {
    path: '/radio',
    name: 'radio',
    component: () => import(/* webpackChunkName: "radio" */ '@/views/home/components/radio.vue'),
    meta: {
      title: '发现音乐/主播电台',
    },
  },
  {
    path: '/top',
    name: 'top',
    component: () => import(/* webpackChunkName: "top" */ '@/views/home/components/top.vue'),
    meta: {
      title: '发现音乐/排行榜',
    },
  },
  {
    path: '/singer',
    name: 'singer',
    component: () => import(/* webpackChunkName: "singer" */ '@/views/home/components/singer.vue'),
    meta: {
      title: '发现音乐/歌手',
    },
  },
  {
    path: '/newMusic',
    name: 'newMusic',
    component: () => import(/* webpackChunkName: "newMusic" */ '@/views/home/components/newMusic.vue'),
    meta: {
      title: '发现音乐/最新音乐',
    },
  },
];

export {
  verticalHome,
};
