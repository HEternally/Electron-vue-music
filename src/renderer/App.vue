<template>
  <div id="app">
    <horizontal-menu/>
    <vertical-menu/>
    <keep-alive>
      <div class="main">
        <router-view></router-view>
      </div>
    </keep-alive>
    <music-player/>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import horizontalMenu from '@/navMenu/horizontalMenu.vue';
  import verticalMenu from '@/navMenu/verticalMenu.vue';
  import musicPlayer from '@/components/musicPlayer/musicPlayer.vue';
  export default {
    name: 'music',
    components: {
      horizontalMenu,
      verticalMenu,
      musicPlayer,
    },
    methods: {
      ...mapActions('histroyRouter', {
        clearAsyncHistory: 'clearAsyncHistory',
      }),
      init() {
        this.$router.replace('/home');
      },
    },
    created() {
      this.clearAsyncHistory();
      this.init();
      window.this = this;
    },
  };
</script>

<style lang="scss">
  /* CSS */
  #app {
    position: relative;
    width: 100%;
    height: 100%;
    background:#fff;
    overflow: hidden;
    .main {
      position: absolute;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding:50px 0 61px 200px;
      top:0;
      left:0;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
</style>
