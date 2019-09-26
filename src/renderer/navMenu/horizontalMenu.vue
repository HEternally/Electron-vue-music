<template>
    <div id="horizontal">
        <i :style="historyList.length > 0 ? 'opacity:1' : 'opacity:0.2'" class="el-icon-arrow-left" @click="historyClick"></i>
        <i :style="historyList.length > 0 ? 'opacity:1' : 'opacity:0.2'" class="el-icon-arrow-right" @click="historyClick"></i>
        <router-link :to="item.href" v-for="(item, index) in Menus" :key="index">{{item.title}}</router-link>
        <div>{{historyList}}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'horizontal-menu',
  data() {
    return {
    };
  },
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
            href: '/rankingList',
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
  methods: {
    historyClick() {
      console.log(this.historyList);// eslint-disable-line
    //   this.$router.go(-1);
    },
  },
  computed: {
    // ...mapState({
    //   historyList: state => state.histroyRouter.historyList,
    // }),
    ...mapState('histroyRouter', ['historyList']),
  },
};
</script>

<style lang="scss" scoped>
    #horizontal {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        width:100%;
        height:50px;
        align-items: center;
        background: linear-gradient(#f9f9f9,#f5f5f5);
        padding-left:200px;
        -webkit-app-region: drag;
        z-index: 2;
        a {
            color:#646464;
            text-decoration: none;
            font-weight: 600;
            &:hover {
                color:#000;
            }
        }
    }
</style>