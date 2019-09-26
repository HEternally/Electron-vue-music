import Vue from 'vue';
import store from '@/store/index.js';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/views/home/index.vue').default,
      children: [
        {
          path: '/songList',
          name: 'songList',
          component: () => import(/* webpackChunkName: "songList" */ '@/views/songList/index.vue'),
        },
        {
          path: '/radio',
          name: 'radio',
          component: () => import(/* webpackChunkName: "radio" */ '@/views/radio/index.vue'),
        },
      ],
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log(to, from, next, store);// eslint-disable-line
  next();
});

router.afterEach((to, from) => {
  console.log(to, from);// eslint-disable-line
  store.commit('histroyRouter/INCREMENT_HISTORY', from.fullPath);
});
export default router;
