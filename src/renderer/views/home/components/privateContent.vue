<template>
  <div id="privateContent">
    <div class="title">独家放送<i class="el-icon-arrow-right"></i></div>
    <div class="card">
      <ul>
        <li v-for="(item, index) in privateContent" :key="index" :data-videoId="item.videoId" @click="goVideo(item.videoId)">
          <img :src="item.sPicUrl" :alt="item.alg"/>
          <i class="el-icon-video-play play"></i>
          <div class="name">{{item.name}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'privateContent',
  data() {
    return {
    };
  },
  props: {
    privateContent: {
      type: Array,
      defaultZ() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
  #privateContent {
    padding-bottom: 103px;
    .title {
      display:inline-block;
      color: #000;
      font-weight: 900;
      font-size: 18px;
      cursor: pointer;
    }
    .card {
      ul {
        display: flex;
        font-size: 0;
        li {
          position: relative;
          justify-content: space-between;
          margin-top: 6px;
          margin-right: 18px;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
          &:nth-child(3) {
            margin-right: 0px;
          }
          img {
            width: 100%;
            border-radius: 5px;
            box-shadow:0px 0px 10px #333333;
            box-sizing: border-box;
          }
          .name {
            position: absolute;
            height: 34px;
            bottom: -34px;
          }
          .play {
            position: absolute;
            width:24px;
            height:24px;
            font-size:24px;
            color:#fff;
            left:7px;
            top:7px;
            background: #8c8989;
            border-radius: 50%;
            opacity: 0.5;
          }
        }
      }
    }
  }
</style>