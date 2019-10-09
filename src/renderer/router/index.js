import Vue from 'vue';
import store from '@/store/index.js';
import Router from 'vue-router';

import Home from '@/views/home';
import { verticalHome } from './modules/verticalHome';
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        ...verticalHome,
      ],
    },
    {
      path: '/personalFM',
      name: 'personalFM',
      component: () => import(/* webpackChunkName: "radio" */ '@/views/personalFM/index.vue'),
    },
    {
      path: '/MV',
      name: 'MV',
      component: () => import(/* webpackChunkName: "MV" */ '@/views/MV/index.vue'),
    },
    {
      path: '/friends',
      name: 'friends',
      component: () => import(/* webpackChunkName: "friends" */ '@/views/friends/index.vue'),
    },
    {
      path: '/playlist',
      name: 'playlist',
      component: () => import(/* webpackChunkName: "playlist" */ '@/views/playList/index.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  next();
});

router.afterEach((to, from) => {
  // store.dispatch('histroyRouter/updateAsyncHistory', from.fullPath);
});

export default router;
