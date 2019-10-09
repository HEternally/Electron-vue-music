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
import topMenu from '@/navMenu/components/topMenu.vue';
// import { getBanner } from '@/api/banner';
// import { getPersonalizedPlaylist } from '@/api/personalized.js';
import Banner from './components/banner.vue';
import SongList from './components/songList.vue';
export default {
  name: 'home',
  data() {
    return {
      showRouter: false,
      loading: false,
      banners: [
        {
          imageUrl: 'http://p1.music.126.net/cxB1DmMfAWFiJp9-zYkDTw==/109951164394258641.jpg',
          targetId: 1392990601,
          targetType: 1,
          titleColor: 'red',
          typeTitle: '独家',
          url: null,
          encodeId: '1392990601',
        },
        {
          imageUrl: 'http://p1.music.126.net/pQXk_WB8v6Z7AqysuN1s9A==/109951164394311199.jpg',
          targetId: 353066,
          targetType: 1,
          titleColor: 'red',
          typeTitle: 'VIP专享',
          url: null,
          encodeId: '353066',
        },
        {
          imageUrl: 'http://p1.music.126.net/XxWYh8Md1wRmcYTG99K4fQ==/109951164394869201.jpg',
          targetId: 0,
          targetType: 3000,
          titleColor: 'blue',
          typeTitle: '数字专辑',
          url: 'https://music.163.com/store/newalbum/detail?id=81880860',
          encodeId: '0',
        },
        {
          imageUrl: 'http://p1.music.126.net/scCtQVdjQ8GFncg1jFIlPg==/109951164394317807.jpg',
          targetId: 0,
          targetType: 3000,
          titleColor: 'blue',
          typeTitle: '活动',
          url: 'https://music.163.com/m/at/HUAYAN15',
          encodeId: '0',
        },
        {
          imageUrl: 'http://p1.music.126.net/GM0AGZEvQbxJxAOUqSyxdQ==/109951164394324479.jpg',
          targetId: 1392990303,
          targetType: 1,
          titleColor: 'red',
          typeTitle: '独家',
          url: null,
          encodeId: '1392990303',
        },
        {
          imageUrl: 'http://p1.music.126.net/AHogI_1Gry2F6S7vfzGkqA==/109951164394331877.jpg',
          targetId: 0,
          targetType: 3000,
          titleColor: 'blue',
          typeTitle: '独家策划',
          url: 'https://music.163.com/m/at/5d907ca374cc99cc1889fe46',
          encodeId: '0',
        },
        {
          imageUrl: 'http://p1.music.126.net/taOJVdorvAnAIfv_KlrvKA==/109951164394334475.jpg',
          targetId: 81745607,
          targetType: 10,
          titleColor: 'red',
          typeTitle: '独家',
          url: null,
          encodeId: '81745607',
        },
        {
          imageUrl: 'http://p1.music.126.net/AF_e4wfp15xKpMUaGr89sQ==/109951164394345678.jpg',
          targetId: 0,
          targetType: 3000,
          titleColor: 'blue',
          typeTitle: '活动',
          url: 'https://music.163.com/m/at/5d8ee4ef74cc99cc1889f4d1',
          encodeId: '0',
        },
      ],
      personglizedPlaylist: [
        {
          id: 2979357386,
          name: '从这个秋日起，给自己一个新的开始',
          copywriter: '编辑推荐：从这个秋日起要走得更稳更坦荡些呀',
          picUrl: 'https://p2.music.126.net/zJh743wIH-TZWZ52bE_j1g==/109951164392491409.jpg',
          canDislike: false,
          playCount: 2375376,
          trackCount: 45,
          highQuality: false,
          alg: 'featured',
        },
        {
          id: 2392161318,
          name: '爸比妈咪那个年代都会听什么情歌啊？',
          copywriter: '编辑推荐：具有年代味的情歌，希望能唤起你的情怀与美好岁月。',
          picUrl: 'https://p1.music.126.net/o_guRefMVoKcsu4Wn7gB3w==/109951163520968386.jpg',
          canDislike: false,
          playCount: 431250,
          trackCount: 30,
          highQuality: false,
          alg: 'featured',
        },
        {
          id: 2920846969,
          name: '当褪去了浮躁和华丽 连世界都简约单纯了',
          copywriter: '编辑推荐：众生平庸，庸俗人间星光',
          picUrl: 'https://p2.music.126.net/4Q1ilkzLqcwnQvCKJmdWeA==/109951164417654392.jpg',
          canDislike: false,
          playCount: 361366,
          trackCount: 39,
          highQuality: false,
          alg: 'featured',
        },
        {
          id: 2954657473,
          name: '下辈子做一只咖啡馆的猫，听着音乐扭着懒腰',
          copywriter: '热门歌单推荐',
          picUrl: 'https://p2.music.126.net/zLsNJ5iI_7qj-kEIQTRUhg==/109951164343658739.jpg',
          canDislike: true,
          playCount: 644400,
          trackCount: 30,
          highQuality: false,
          alg: 'hot_server',
        },
        {
          id: 104322400,
          name: '寄存一首，胶片味道的歌',
          copywriter: '听说好音乐和电影更配哦',
          picUrl: 'https://p2.music.126.net/0hJEKIFDvVMYVFU40061fA==/3316127070395444.jpg',
          canDislike: true,
          playCount: 1536293,
          trackCount: 50,
          highQuality: true,
          alg: 'hot_server',
        },
        {
          id: 2995205038,
          name: '国摇新选·最纯粹的中国制燥',
          copywriter: '热门歌单推荐',
          picUrl: 'https://p2.music.126.net/pku4ImrRmzA39RrKytIhhw==/109951164382328098.jpg',
          canDislike: true,
          playCount: 756464,
          trackCount: 32,
          highQuality: false,
          alg: 'hot_server',
        },
        {
          id: 86112285,
          name: '聆听藏乐，呼吸高海拔之纯净',
          copywriter: '雪域高原，极致动听',
          picUrl: 'https://p2.music.126.net/QH-GO1IV5dr4QK9-fouF6A==/7948369558074504.jpg',
          canDislike: true,
          playCount: 2598781,
          trackCount: 28,
          highQuality: true,
          alg: 'hot_server',
        },
        {
          id: 2952888131,
          name: '忧郁诗人 | 灵魂迷失在漫长的航海线上',
          copywriter: '热门歌单推荐',
          picUrl: 'https://p2.music.126.net/Pdgk0qbC65ew7HctZde0Eg==/109951164317889980.jpg',
          canDislike: true,
          playCount: 537930,
          trackCount: 59,
          highQuality: false,
          alg: 'hot_server',
        },
        {
          id: 330083915,
          name: 'VIP音乐¦仕途坚韧的DJ大师再混音乐精选集',
          copywriter: '带你感受真正的大神混音作品！',
          picUrl: 'https://p2.music.126.net/gs-xTarfq-wqHXEp6pXx0g==/19216164718860069.jpg',
          canDislike: true,
          playCount: 3071155,
          trackCount: 59,
          highQuality: true,
          alg: 'hot_server',
        },
        {
          id: 2918497077,
          name: 'Raver朝圣必备 | 2019 EDC广东站蹦迪预热',
          copywriter: '热门歌单推荐',
          picUrl: 'https://p2.music.126.net/m8cOYvLKXtxWjjf1KWAONg==/109951164268974082.jpg',
          canDislike: true,
          playCount: 508425,
          trackCount: 106,
          highQuality: false,
          alg: 'hot_server',
        },
      ],
    };
  },
  methods: {
    async init() {
    //   this.loading = true;
    //   Promise.all([
    //     getBanner(),
    //     getPersonalizedPlaylist(),
    //   ]).then((res) => {
    //     this.banners = res[0].data.banners;
    //     this.personglizedPlaylist = res[1].data.result;
    //     this.loading = false;
    //   });
    },
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
    this.init();
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