<template>
  <div id="app">

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'music',
    components: {},
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
