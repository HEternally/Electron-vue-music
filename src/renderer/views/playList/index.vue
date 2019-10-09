<template>
  <div>
    {{id}}
  </div>
</template>

<script>
export default {
  name: 'playList',
  data() {
    return {
      id: '',
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.id = this.$route.params.id;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>