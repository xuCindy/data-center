import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// export const userInfo = state => state.userInfo

const SET_USERINFO = 'SET_USERINFO'

export default new Vuex.Store({
  state: {
    userInfo: {},
  },
  mutations: {
    [SET_USERINFO](state, userInfo) {
      state.userInfo = userInfo
    },
  },
  getters: {
    userInfo: state => state.userInfo
  },
  actions: {

  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
