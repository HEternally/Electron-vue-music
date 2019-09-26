const state = {
  historyList: [],
};

const mutations = {
  INCREMENT_HISTORY(state, history) {
    state.historyList.push(history);
  },
  BACKMENT_HISTORY() {
    state.historyList.pop();
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
