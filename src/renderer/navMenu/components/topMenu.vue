<template>
  <div class="topMenu">
    <router-link :to="item.href" v-for="(item, index) in Menus" :key="index">{{item.title}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'topMenu',
  props: {
    Menus: {
      type: Array,
      default() {
        return [
          {
            title: '个性推荐',
            href: '/home',
          },
          {
            title: '歌单',
            href: '/songList',
          },
          {
            title: '主播电台',
            href: '/radio',
          },
          {
            title: '排行榜',
            href: '/top',
          },
          {
            title: '歌手',
            href: '/singer',
          },
          {
            title: '最新音乐',
            href: '/newMusic',
          },
        ];
      },
    },
  },
  computed: {
  },
};
</script>

<style lang="scss" scoped>
  .topMenu {
    position: fixed;
    top:25px;
    transform:translateY(-50%);
    z-index: 13;
    a {
        color:#646464;
        text-decoration: none;
        font-weight: 600;
        font-size: 15px;
        margin-left:28px;
        &:hover {
            color:#000;
        }
        &.router-link-active {
          color:#000;
        }
    }
  }
  
</style>