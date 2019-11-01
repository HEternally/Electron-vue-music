<template>
    <div id="horizontal">
      <div class="historyButton">
        <i class="el-icon-arrow-left" @click="historyClick(true)"></i>
        <i class="el-icon-arrow-right" @click="historyClick(false)"></i>
      </div>
      <div class="searchInput">
        <el-input
          placeholder="搜索"
          prefix-icon="el-icon-search"
          v-model="keywords">
        </el-input>
      </div>
      <i class="el-icon-setting"></i>
      <i class="el-icon-message"></i>
      <i class="el-icon-brush"></i>
      <i class="el-icon-copy-document"></i>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'horizontal-menu',
  data() {
    return {
      keywords: '',
    };
  },
  methods: {
    ...mapActions('histroyRouter', {
      changeAsyncBack: 'changeAsyncBack',
      changeAsyncNext: 'changeAsyncNext',
      changeAsyncGo: 'changeAsyncGo',
    }),
    historyClick(back) {
      const vw = this;
      if (back) {
        // vw.$router.go(-1);
        vw.$router.back();
      } else if (!back) {
        // vw.$router.go(1);
        vw.$router.forward();
      }
    },
  },
  computed: {
    // ...mapState({
    //   historyList: state => state.histroyRouter.historyList,
    // }),
    ...mapState('histroyRouter', ['historyList', 'canBack', 'canNext']),
  },
  components: {
  },
};
</script>

<style lang="scss">
    #horizontal {
        box-sizing: border-box;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        width: 100%;
        height: 50px;
        align-items: center;
        background: linear-gradient(#f9f9f9,#f5f5f5);
        padding-left: 200px;
        -webkit-app-region: drag;
        z-index: 11;
        .historyButton {
          position: absolute;
          left: 150px;
        }
        .searchInput {
          position: absolute;
          width: 150px;
          height: 25px;
          right: 163px;
          top: 25px;
          transform: translateY(-50%);
          .el-input {
            input {
              height: 25px !important;
              line-height: 25px !important;
              border-radius: 25px;
            }
            .el-icon-search {
              line-height: 25px !important;
              color: #000;
            }
          }
        }
        .el-icon-setting {
          position: absolute;
          right: 124px;
          top: 50%;
          transform: translateY(-50%);
        }
        .el-icon-message {
          position: absolute;
          right: 85px;
          top: 50%;
          transform: translateY(-50%);
        }
        .el-icon-brush {
          position: absolute;
          right: 49px;
          top: 50%;
          transform: translateY(-50%);
        }
        .el-icon-copy-document {
          position: absolute;
          right: 18px;
          top: 50%;
          transform: translateY(-50%);
        }
    }
</style>