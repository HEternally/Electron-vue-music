const state = {
  banners: [], // Home/banner
  personglizedPlaylist: [], // Home/songList
  getPersonalizedPrivatecontent: [], // 独家放送
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
  SET_CONTENT(state, content) {
    state.getPersonalizedPrivatecontent = content;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
