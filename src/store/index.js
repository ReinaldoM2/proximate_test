import { createStore } from "vuex";

export default createStore({
  state: {
    token: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    saveToken({ commit }, token) {
      commit("setToken", token);
      localStorage.setItem("token", token);
    },
  },
  modules: {},
});
