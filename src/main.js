// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import apolloProvider from '../config/apollo'
import VueApollo from 'vue-apollo'

import DefaultLayout from './layouts/master.vue'
import homepage from './stores/homepage'
import category from './stores/categories'

Vue.use(Vuex)
Vue.use(VueApollo)

const store = new Vuex.Store({
  modules: {
    homepage,
    category
  }
})

store.dispatch('getHomePageDetail')
store.dispatch('getCategories')

Vue.config.productionTip = false

Vue.component('Layout', DefaultLayout)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
  apolloProvider
})
