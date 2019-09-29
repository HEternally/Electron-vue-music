const state = {
  historyList: [],
  canBack: false, // go(-1)
  canNext: false, // go(1)
  canAdd: true, // Determine whether to add historical records
  isGo: false, // Whether to go
};

const mutations = {
  INCREMENT_HISTORY(state, history) {
    state.historyList.push(history);
  },
  BACKMENT_HISTORY(state, pryload) {
    state.historyList.splice(pryload.index, 1, pryload.history);
  },
  CHANGE_CANBACK(state, pryload) {
    state.canBack = pryload;
  },
  CHANGE_CANNEXT(state, pryload) {
    state.canNext = pryload;
  },
  CHANGE_CANADD(state, pryload) {
    state.canAdd = pryload;
  },
  CHANGE_ISGO(state, pryload) {
    state.isGo = pryload;
  },
  CLEAR_HISTORY(state) {
    state.historyList = [];
  },
};

const actions = {
  updateAsyncHistory({ state, commit }, history) {
    if (state.canAdd) {
      commit('INCREMENT_HISTORY', history);
      if (state.historyList.length > 1) {
        commit('CHANGE_CANBACK', true);
      } else {
        commit('CHANGE_CANBACK', false);
        commit('CHANGE_CANNEXT', false);
      }
    }
  },
  backAsyncHistory({ commit }, pryload) {
    commit('BACKMENT_HISTORY', pryload);
  },
  clearAsyncHistory({ commit }) {
    commit('CLEAR_HISTORY');
  },
  changeAsyncBack({ commit }, pryload) {
    commit('CHANGE_CANBACK', pryload);
  },
  changeAsyncNext({ commit }, pryload) {
    commit('CHANGE_CANNEXT', pryload);
  },
  changeAsyncAdd({ commit }, pryload) {
    commit('CHANGE_CANADD', pryload);
  },
  changeAsyncGo({ commit }, pryload) {
    commit('CHANGE_ISGO', pryload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
