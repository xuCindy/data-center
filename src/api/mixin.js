import {mapGetters, mapMutations} from 'vuex'

export const userMixin = {
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  mounted() {
    this.handlePlaylist(this.playlist)
  },
  activated() {
    this.handlePlaylist(this.playlist)
  },
  watch: {
    playlist(newVal) {
      this.handlePlaylist(newVal)
    }
  },
  methods: {
    handlePlaylist() {
      throw new Error('component must implement handlePlaylist method')
    },
    ...mapMutations({
      setUser: 'SET_USER'
    })
  }
}
