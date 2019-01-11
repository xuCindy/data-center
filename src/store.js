import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const user = state => state.user
const SET_USER = 'SET_USER'

export default new Vuex.Store({
  state: {
    singer: {},
  },
  mutations: {
    [SET_USER](state, user) {
      state.user = user
    },
  },
  actions: {

  }
})
