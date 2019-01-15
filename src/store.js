import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export const user = state => state.user
const SET_USER = 'SET_USER'

export default new Vuex.Store({
  state: {
    user: {},
  },
  mutations: {
    [SET_USER](state, user) {
      state.user = user
    },
  },
  actions: {},
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
