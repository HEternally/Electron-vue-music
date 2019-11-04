<template>
  <div id='home'>
    <top-menu/>
    <router-view v-show='showRouter'></router-view>
    <div v-show='!showRouter' class='recommend'>
      <div class='container' v-loading='loading'>
        <banner :banners='banners'/>
        <song-list :isComponent='true' :personglizedPlaylist="personglizedPlaylist"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import topMenu from '@/navMenu/components/topMenu.vue';
import { getBanner } from '@/api/banner';
import { getPersonalizedPlaylist } from '@/api/personalized.js';
import Banner from './components/banner.vue';
import SongList from './components/songList.vue';
export default {
  name: 'home',
  data() {
    return {
      showRouter: false,
      loading: false,
    };
  },
  methods: {
    ...mapMutations('homeStore', {
      setBanner: 'SET_BANNERS',
      setPlaylist: 'SET_PLAYLIST',
    }),
    async init() {
      this.loading = true;
      await Promise.all([
        getBanner(),
        getPersonalizedPlaylist(),
        // getAllMv(),
      ]).then((res) => {
        this.banners = res[0].data.banners;
        this.personglizedPlaylist = res[1].data.result.slice(0, 10);
        // this.setBanner(this.banners);
        // this.setPlaylist(this.personglizedPlaylist);
        this.loading = false;
      })
        .catch(() => {
          this.loading = false;
        });
    },
  },
  computed: {
    ...mapState('homeStore', {
      banner: 'banners',
      playlist: 'personglizedPlaylist',
    }),
    banners: {
      get: function() {
        return this.banner;
      },
      set: function(newValue) {
        this.setBanner(newValue);
      }
    },
    personglizedPlaylist: {
      get: function() {
        return this.playlist
      },
      set: function(newValue) {
        this.setPlaylist(newValue);
      }
    }
  },
  watch: {
    '$route'(to, from) {// eslint-disable-line
      if (to.fullPath === '/home') {
        this.showRouter = false;
      } else {
        this.showRouter = true;
      }
    },
  },
  components: {
    topMenu,
    Banner,
    SongList,
  },
  created() {
    if (this.banners.length === 0) {
      this.init();
    }
  },
};
</script>

<style lang='scss' scoped>
  #home {
    width: 100%;
    box-sizing: border-box;
    // padding:28px;
    .recommend {
      width: 92%;
      // min-width: 739px;
      max-width: 1038px;
      height: 100%;
      margin: 28px auto 61px;
      .container {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>