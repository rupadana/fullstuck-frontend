import axios from 'axios'
import { backendUrl } from '../constants'

export default {
  state: {
    homepage: {}
  },
  mutations: {
    setHomepage (state, data) {
      state.homepage = data
    }
  },
  actions: {
    getHomePageDetail ({ commit }) {
      if (localStorage.getItem('homepage')) {
        commit('setHomepage', JSON.parse(localStorage.getItem('homepage')))

        return
      }

      axios.get(`${backendUrl}/homepage`).then(response => {
        commit('setHomepage', response.data)
        localStorage.setItem('homepage', JSON.stringify(response.data))
      })
    }
  },
  getters: {
    homepage (state) {
      return state.homepage
    }
  }
}
