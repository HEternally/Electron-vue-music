<template>
  <div id="vertical">
    <el-row class="tac">
      <el-col>
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#EDEDED"
          text-color="#2F2F2F"
          active-text-color="#D33A31"
          :router="true"
        >
          <el-menu-item index="/home" :style="fullPath === '/home' ? 'color:#D33A31;background-color: #E2E2E2;' : 'color: #303133;background-color: #EDEDED;'">
            <i class="el-icon-headset"></i>
            <span slot="title">发现音乐</span>
          </el-menu-item>
          <el-menu-item index="/personalFM" :style="fullPath === '/personalFM' ? 'color:#D33A31;background-color: #E2E2E2;' : 'color: #303133;background-color: #EDEDED;'">
            <i class="el-icon-files"></i>
            <span slot="title">私人FM</span>
          </el-menu-item>
          <el-menu-item index="/MV" :style="fullPath === '/MV' ? 'color:#D33A31;background-color: #E2E2E2;' : 'color: #303133;background-color: #EDEDED;'">
            <i class="el-icon-monitor"></i>
            <span slot="title">视频</span>
          </el-menu-item>
          <el-menu-item index="/friends" :style="fullPath === '/friends' ? 'color:#D33A31;background-color: #E2E2E2;' : 'color: #303133;background-color: #EDEDED;'">
            <i class="el-icon-user"></i>
            <span slot="title">朋友</span>
          </el-menu-item>
          <p class="myMusic">我的音乐</p>
          <el-menu-item index="/friends" :style="fullPath === '/friends' ? 'color:#D33A31;background-color: #E2E2E2;' : 'color: #303133;background-color: #EDEDED;'">
            <i class="el-icon-folder-opened"></i>
            <span slot="title">iTunes音乐</span>
          </el-menu-item>
          <el-menu-item index="/friends" :style="fullPath === '/friends' ? 'color:#D33A31;background-color: #E2E2E2;' : 'color: #303133;background-color: #EDEDED;'">
            <i class="el-icon-download"></i>
            <span slot="title">下载管理</span>
          </el-menu-item>
          <el-menu-item index="/friends" :style="fullPath === '/friends' ? 'color:#D33A31;background-color: #E2E2E2;' : 'color: #303133;background-color: #EDEDED;'">
            <i class="el-icon-s-promotion"></i>
            <span slot="title">我的音乐云盘</span>
          </el-menu-item>
          <el-menu-item index="/friends" :style="fullPath === '/friends' ? 'color:#D33A31;background-color: #E2E2E2;' : 'color: #303133;background-color: #EDEDED;'">
            <i class="el-icon-mobile"></i>
            <span slot="title">我的电台</span>
          </el-menu-item>
          <el-menu-item index="/friends" :style="fullPath === '/friends' ? 'color:#D33A31;background-color: #E2E2E2;' : 'color: #303133;background-color: #EDEDED;'">
            <i class="el-icon-star-off"></i>
            <span slot="title">我的收藏</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullPath: '',
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath); // eslint-disable-line
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath); // eslint-disable-line
    },
  },
  watch: {
    '$route'(to, from) {// eslint-disable-line
      this.fullPath = to.matched[0].path;
    },
  },
};
</script>

<style lang="scss" scoped>
  #vertical {
    position: absolute;
    left:0;
    top:0;
    display: inline-block;
    box-sizing: border-box;
    width: 200px;
    height: 100%;
    padding: 50px 0 61px 0;
    overflow-y: auto;
    background-color: #EDEDED;
    z-index: 1;
    .el-menu-item {
      font-size: 14px;
      font-weight: 800;
      height: 36px;
      line-height: 36px;
      &:hover {
        background-color:rgb(231, 231, 231) !important;
      }
      i {
        color:inherit;
      }
    }
    .is-active {
      background-color:#E2E2E2 !important;
    }
    .myMusic {
      padding: 20px 20px 10px;
      color: #888888;
    }
  }
</style>