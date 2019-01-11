import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const singer = state => state.singer
const SET_SINGER = 'SET_SINGER'

export default new Vuex.Store({
  state: {
    singer: {},
  },
  mutations: {
    [SET_SINGER](state, singer) {
      state.singer = singer
    },
  },
  actions: {

  }
})
