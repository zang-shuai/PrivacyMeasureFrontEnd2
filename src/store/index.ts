// store/index.js
import { createStore } from "vuex";

export default createStore({
  state: {
    data: {},
  },
  mutations: {
    SET_DATA(state, payload) {
      state.data = payload;
    },
  },
  actions: {
    setData({ commit }, payload) {
      commit("SET_DATA", payload);
    },
  },
  getters: {
    data: (state) => state.data,
  },
});
