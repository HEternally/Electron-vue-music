<template>
  <div id="banner">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <img :src="item.imageUrl" @click="go(item.targetId, item.url)"/>
        <span class="title" :style="{backgroundColor:item.titleColor}">{{item.typeTitle}}</span>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    go(targetId, url) {
      console.log(targetId, url);// eslint-disable-line
      if (url !== null) {
        this.$electron.shell.openExternal(url);
      } else {
        // 点击banner其他操作
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  #banner {
    
    .el-carousel__item--card {
      transition: all .4s ease-in-out;
      border-radius: 8px;
      &.is-active {
        width: 541px;
        left:50%;
        transform:translateX(-50%) scale(1) !important;
      }
      img {
        display: inline-block;
        width: 100%;
        height: 100%;
      }
      .title {
        position: absolute;
        height: 22px;
        text-align: center;
        line-height: 22px;
        right: 0;
        bottom: 0;
        color: #fff;
        font-size: 12px;
        font-weight: 800;
        border-top-left-radius: 8px;
        padding:0 10px;
        opacity: 0.7;
      }
    }
  }
</style>