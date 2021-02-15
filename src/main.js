import Vue from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'
import './registerServiceWorker'
import Vue2TouchEvents from 'vue2-touch-events'
import autofocus from "vue-autofocus-directive"

Vue.directive("autofocus", autofocus);
Vue.use(Vue2TouchEvents)

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
