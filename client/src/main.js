import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Notifications from 'vue-notification'
import wysiwyg from 'vue-wysiwyg'
import '../node_modules/vue-wysiwyg/dist/vueWysiwyg.css'
import VueElementLoading from 'vue-element-loading'

Vue.use(Buefy)
Vue.use(Notifications)
Vue.use(wysiwyg, {})
Vue.component('VueElementLoading', VueElementLoading)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
