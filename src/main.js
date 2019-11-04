import Vue from 'vue'
import App from './App.vue'

import Vuetify from 'vuetify'

Vue.use(Vuetify)


new Vue({
  vuetify: new Vuetify(),
  render: h => h(App),
}).$mount('#app')
