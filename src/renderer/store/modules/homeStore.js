const state = {
  banners: [], // Home/banner
  personglizedPlaylist: [], // Home/songList
};

const getters = {
  banners: state => state.banners,
  personglizedPlaylist: state => state.personglizedPlaylist,
};

const mutations = {
  SET_BANNERS(state, banners) {
    state.banners = banners;
  },
  SET_PLAYLIST(state, playlist) {
    state.personglizedPlaylist = playlist;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
