import axios from 'axios'
import { backendUrl } from '../constants'

export default {
  state: {
    categories: []
  },
  mutations: {
    setCategories (state, data) {
      state.categories = data
    }
  },
  actions: {
    getCategories ({ commit }) {
      axios.get(`${backendUrl}/categories`).then(response => {
        commit('setCategories', response.data)
      })
    }
  },
  getters: {
    categories (state) {
      return state.categories
    }
  }
}
