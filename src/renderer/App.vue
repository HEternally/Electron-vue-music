<template>
  <div id="app">
    <horizontal-menu/>
    <vertical-menu/>
    <keep-alive>
      <router-view></router-view>
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

<style>
  /* CSS */
  #app {
    width: 100%;
    height: 100%;
    background:#fff;
    overflow: hidden;
  }
</style>
