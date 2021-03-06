// import the vue instance
import Vue from 'vue'
// import the App component
import App from './App'
// import the vue router
import VueRouter from 'vue-router'
// import the thing to use asynchronous computed properties
import AsyncComputed from 'vue-async-computed'
// tell vue to use the router
import Portfolio from './components/Portfolio'
import Wallets from './components/Wallets'
import Exchanges from './components/Exchanges'
import Settings from './components/Settings'
import Manual from './components/Manual'

import {store} from './state/state'

// Vue.use(BootstrapVue)
Vue.use(VueRouter) // We imported the router plugin, now we need to tell Vue to *use* the plugin
Vue.use(AsyncComputed)

const routes = [
{ path: '/', component: Portfolio },
{ path: '/wallets', component: Wallets },
{ path: '/exchanges', component: Exchanges },
{ path: '/manual', component: Manual },
{ path: '/settings', component: Settings }
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})

new Vue({
  el: '#app',
  // pass the template to the root component
  template: '<App/>',
  // declare components that the root component can access
  components: { App },
  // pass in the router to the Vue instance
  router: router,
  store: store,
  mounted: function () {
    this.$store.dispatch('syncExchangeRates')
  }
}).$mount('#app')// mount the router on the app
