<template>
  <div id="home">
    <horizontal-menu/>
    <vertical-menu/>
    <div class="main">
      <router-view></router-view>
    </div>
    <music-player/>
  </div>
</template>

<script>
import horizontalMenu from '@/navMenu/horizontalMenu.vue';
import verticalMenu from '@/navMenu/verticalMenu.vue';
import musicPlayer from '@/components/musicPlayer/musicPlayer.vue';

export default {
  name: 'home',
  data() {
    return {

    };
  },
  components: {
    horizontalMenu,
    verticalMenu,
    musicPlayer,
  },
  created() {
    window.this = this;
  },
};
</script>

<style lang="scss" scoped>
  #home {
    width: 100%;
    height: 100%;
  }
</style>