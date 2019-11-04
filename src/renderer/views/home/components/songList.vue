<template>
  <div id="songList">
    <div class="topList" v-if="!isComponent">songList</div>
    <div class="compontList" v-else>
      <div class="title" @click="goSongList">推荐歌单<i class="el-icon-arrow-right"></i></div>
      <div class="card">
        <ul>
          <li v-for="(item, index) in personglizedPlaylist" :key="index" :data-id="item.id" @click="goPlayList(item.id)">
            <img :src="item.picUrl" :alt="item.alg">
            <i class="el-icon-caret-right play"></i>
            <div class="playCount"><i class="el-icon-video-play"></i>{{item.playCount > 100000 ? Math.floor(item.playCount / 10000) + '万' : item.playCount}}</div>
            <div class="name">{{item.name}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'songList',
  data() {
    return {
    };
  },
  props: {
    isComponent: {
      type: Boolean,
      default: false,
    },
    personglizedPlaylist: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    goPlayList(id) {
      this.$router.push({ name: 'playlist', params: { id } });
    },
    goSongList() {
      this.$router.push({ name: 'songList' });
    },
  },
};
</script>

<style lang="scss" scoped>
#songList {
  .topList {
    color: #000;
    font-weight: 800;
  }
  .compontList {
    .title {
      display:inline-block;
      color: #000;
      font-weight: 900;
      font-size: 18px;
      cursor: pointer;
    }
    .card {
      ul {
        font-size: 0;
        li {
          position: relative;
          display: inline-block;
          width: 18%;
          margin-top: 6px;
          margin-right: 18px;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
          &:nth-child(5n) {
            margin-right: 0px;
          }
          &:nth-child(n + 6) {
            margin-top: 81px;
          }
          img {
            width: 100%;
            // height: 130px;
            border-radius: 5px;
            box-shadow:0px 0px 10px #333333;
            box-sizing: border-box;
          }
          .playCount {
            position: absolute;
            top: 1px;
            right: 5px;
            color: #fff;
            i {
              margin-right: 3px;
            }
          }
          .name {
            position: absolute;
            height: 34px;
            bottom: -34px;
          }
          .play {
            position: absolute;
            width: 30px;
            height: 30px;
            right: 10px;
            top: 90px;
            text-align: center;
            line-height: 30px;
            font-size: 24px;
            background-color: #f7f7f8;
            color: #c3463a;
            border-radius: 50%;
            opacity: 0;
          }
          &:hover {
            .play {
              opacity: .8;
            }
          }
        }
      }
    }
  }
}
</style>